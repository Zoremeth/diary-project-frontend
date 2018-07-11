import { Injectable } from '@angular/core';
import { Entry } from './entry';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatapullerService {

  constructor() { }

  private currentEntry = 0;

  entries: Entry[] = [
    {
      id: 1,
      date: '9-7-2018',
      content: 'Nani',
    },
    {
      id: 2,
      date: '10-7-2018',
      content: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over. The quick brown fox jumps over the lazy dog.'
    },
    {
      id: 3,
      date: '11-7-2018',
      content: 'Hello World!'
    }

  ];

  getEntries(): Observable<Entry[]> {
    // To-DO: Use observable
    return of(this.entries);
  }

  getDate(id: number): string {
    return this.entries[id - 1].date;
  }

  setCurrentEntry(id: number) {
    this.currentEntry = id;
  }

  getCurrentEntry() {
    return this.currentEntry;
  }

  getContent(id: number): string {
    return this.entries[id - 1].content;
  }

  deleteEntry(id: number): void {
    alert(id);
    alert('Deleted sucessfully');
  }

}
