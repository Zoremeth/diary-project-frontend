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
      id: 0,
      date: '9-7-2018',
      content: 'Hello'
    },
    {
      id: 1,
      date: '10-7-2018',
      content: 'Hello 2'
    },
    {
      id: 2,
      date: '11-7-2018',
      content: 'Hello 3'
    }

  ];

  getEntries(): Entry[] {
    // To-DO: Use observable
    return this.entries;
  }

  getDate(id: number): String {
    return this.entries[id].date;
  }

  setCurrentEntry(id: number) {
    this.currentEntry = id;
  }

  getCurrentEntry() {
    return this.currentEntry;
  }

  getContent(id: number): String {
    return this.entries[id].content;
  }

}
