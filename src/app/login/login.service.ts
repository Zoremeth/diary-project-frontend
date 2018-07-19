import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../shared/data.service';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn = false;
  private currentUsername = 'none';

  constructor(public dataService: DataService) { }
  isLoggedIn(): Observable<boolean> {
    this.dataService.connection
      .on('ValidationDone', (validationStatus: boolean) => { this.loggedIn = validationStatus; });
    return of(this.loggedIn);
  }

  login(username: string, password: string): void {
    this.dataService.login(username, password);
    this.currentUsername = username;
  }

  logout(): void {
    this.loggedIn = false;
  }

  addUser(username: string, password: string): void {
    this.dataService.add(username, password);
  }

  get currentUser() {
    return this.currentUsername;
  }
}
