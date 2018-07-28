import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';
import { DataService } from '../../shared/data.service';

export interface Entry {
  id: number;
  title: string;
  date: string;
  // order: number
  content: string; // Figure out how to implement markup later.
  deleted?: boolean;
  locked?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private entries: { [key: number]: Entry } = {
  };

  private currentEntryStream = new BehaviorSubject<number>(-1);
  private entriesStream = new BehaviorSubject<{ [key: number]: Entry }>(this.entries);

  entries$ = this.entriesStream.asObservable().pipe(map(entries => this.createEntryList(entries)));

  currentEntry$ = this.currentEntryStream.asObservable().pipe(
    withLatestFrom(this.entriesStream),
    map(([index, entries]) => {
      const selected = entries[index];
      return !selected || selected.deleted ? undefined : selected;
    })
  );

  constructor(public dataService: DataService) {
    this.dataService.connection
      .on('EntriesRetrieved', (receivedEntries: { [key: number]: Entry }) => {
        this.entries = receivedEntries;
        this.entriesStream.next(receivedEntries);
      });
  }

  add(title: string, date: string, content: string): number {
    const id = Object.keys(this.entries).length;
    this.entries[id] = { id, date, title, content };
    this.entriesStream.next(this.entries);
    return id;
  }

  delete(id: number): void {
    this.entries[id].deleted = true;
    this.entriesStream.next(this.entries);
    console.log(`${id} deleted`);
  }

  setCurrent(id: number) {
    this.currentEntryStream.next(id);
    console.log(`${id} selected`);
  }

  private createEntryList(entries: { [key: number]: Entry }) {
    return Object.values(this.entries)
      .filter(entry => !entry.deleted)
      .sort((a, b) => a.id - b.id);
  }


}

