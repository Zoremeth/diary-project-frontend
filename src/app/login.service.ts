import { Injectable } from '@angular/core';
import { Observable, of } from '../../node_modules/rxjs';
import { DataService } from './data.service';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn = false;

  constructor(public dataService: DataService) { }

  isLoggedIn(): Observable<boolean> {
    this.dataService.connection
      .on('ValidationDone', (validationStatus: boolean) => { this.loggedIn = validationStatus; });
    this.dataService.connection
      .on('EntriesRetrieved', (entries: any) => { console.log(entries); });
    return of(this.loggedIn);
  }

  login(username: string, password: string): void {
    this.dataService.login(username, password);
  }

  logout(): void {
    this.loggedIn = false;
  }

  addUser(username: string, password: string): void {
    this.dataService.add(username, password);
  }
}
