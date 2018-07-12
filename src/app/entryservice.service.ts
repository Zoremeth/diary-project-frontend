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
export class EntryService {

  constructor() { }


  private currentEntry = -1;
  private loginState = false;

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

  addEntry(title: string, date: string, content: string) {
    const entry: Entry = {
      id: this.entries.length + 1,
      date: date,
      title: title,
      content: content,
    };
    this.entries.push(entry);
    console.log(this.entries);
  }

  deleteEntry(id: number): void {
    console.log(id);
    this.entries.splice(id, 1);
    this.reorderArray();
    console.log('Deleted.');
  }

  getTitle(id: number): string {
    return this.entries[id].title;
  }

  setTitle(id: number, newString: string): void {
    this.entries[id].title = newString;
  }

  getDate(id: number): string {
    return this.entries[id].date;
  }

  getContent(id: number): string {
    return this.entries[id].content;
  }

  getCurrentEntry(): number {
    return this.currentEntry;
  }

  setCurrentEntry(id: number) {
    this.currentEntry = id;
  }

  reorderArray(): void {
    // Not efficient when handling big arrays.
    let counter = 0;
    this.entries.forEach(element => {
      element.id = counter;
      counter++;
    });
  }

  getLoginState(): boolean {
    return this.loginState;
  }

  setLoginState(state: boolean): void {
    this.loginState = state;
  }
}
