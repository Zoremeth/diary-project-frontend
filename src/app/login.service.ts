import { Injectable } from '@angular/core';
import { Observable, of } from '../../node_modules/rxjs';
import * as signalR from '@aspnet/signalr';
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
      .on('ValidationRequest', (ValidationStatus: boolean) => { console.log(ValidationStatus); this.loggedIn = ValidationStatus; });
    return of(this.loggedIn);
  }

  login(username: string, password: string): void {
    this.dataService.login(username, password);
  }

  logout(): void {
    this.loggedIn = false;
  }

  addUser(username: string, password: string): void {
  }
}
