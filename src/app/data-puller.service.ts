import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Entry {
  id: number;
  title: string;
  date: string;
  // order: number
  content: string; // Figure out how to implement markup later.
}

@Injectable({
  providedIn: 'root'
})
export class DatapullerService {

  constructor() { }

  private currentEntry = 0;

  entries: Entry[] = [
    {
      id: 0,
      title: 'Test1',
      date: '9-7-2018',
      content: 'Nani',
    },
    {
      id: 1,
      title: 'Test2',
      date: '10-7-2018',
      content: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over. The quick brown fox jumps over the lazy dog.'
    },
    {
      id: 2,
      title: 'Test3',
      date: '11-7-2018',
      content: 'Hello World!'
    }

  ];

  getEntries(): Observable<Entry[]> {
    // To-DO: Use observable
    return of(this.entries);
  }

  getTitle(id: number): string {
    return this.entries[id].title;
  }

  getDate(id: number): string {
    return this.entries[id].date;
  }

  setCurrentEntry(id: number) {
    this.currentEntry = id;
  }

  getCurrentEntry() {
    return this.currentEntry;
  }

  getContent(id: number): string {
    return this.entries[id].content;
  }

  deleteEntry(id: number): void {
    console.log(id);
    this.entries.splice(id, 1);
    let counter = 0;
    this.entries.forEach(element => {
      element.id = counter;
      counter++;
    });
    console.log('Deleted.');
  }

}
