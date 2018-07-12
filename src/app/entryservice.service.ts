import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

export interface Entry {
  id: number;
  title: string;
  date: string;
  // order: number
  content: string; // Figure out how to implement markup later.
  deleted?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private entries: { [key: number]: Entry } = {
    0: {
      id: 0,
      title: 'Test1',
      date: '9-7-2018',
      content: 'Nani'
    },
    1: {
      id: 1,
      title: 'Test2',
      date: '10-7-2018',
      content:
        'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over. The quick brown fox jumps over the lazy dog.'
    },
    2: {
      id: 2,
      title: 'Test3',
      date: '11-7-2018',
      content: 'Hello World!'
    }
  };

  private currentEntryStream = new BehaviorSubject<number>(-1);
  private entriesStream = new BehaviorSubject<{ [key: number]: Entry }>(
    this.createEntryList(this.entries)
  );

  entries$ = this.entriesStream.asObservable().pipe(map(entries => this.createEntryList(entries)));

  currentEntry$ = this.currentEntryStream.asObservable().pipe(
    withLatestFrom(this.entriesStream),
    map(([index, entries]) => {
      const selected = entries[index];
      return !selected || selected.deleted ? undefined : selected;
    })
  );

  add(title: string, date: string, content: string): number {
    const id = Object.keys(this.entries).length;
    this.entries[id] = { id, date, title, content };
    this.entriesStream.next(this.entries);
    return id;
    console.log(this.entries);
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
