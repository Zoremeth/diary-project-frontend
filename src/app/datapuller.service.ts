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
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit arcu vel pretium dapibus. Praesent vehicula erat sed pharetra maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque hendrerit ex fringilla, dictum enim sed, pulvinar magna. Suspendisse non massa velit. Pellentesque quis nisi in sapien tempus hendrerit mollis vitae diam. Morbi sagittis nec purus quis rhoncus. Maecenas molestie nisi nec augue accumsan, viverra condimentum risus fringilla. Suspendisse at purus turpis. In venenatis ligula eget mi tempus tempor. Nulla facilisi.'
    },
    {
      id: 2,
      date: '10-7-2018',
      content: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'
    },
    {
      id: 3,
      date: '11-7-2018',
      content: 'Hello World!'
    }

  ];

  getEntries(): Entry[] {
    // To-DO: Use observable
    return this.entries;
  }

  getDate(id: number): String {
    return this.entries[id - 1].date;
  }

  setCurrentEntry(id: number) {
    this.currentEntry = id;
  }

  getCurrentEntry() {
    return this.currentEntry;
  }

  getContent(id: number): String {
    return this.entries[id - 1].content;
  }

}
