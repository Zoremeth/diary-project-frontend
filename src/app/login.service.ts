import { Injectable } from '@angular/core';
import { Observable, of } from '../../node_modules/rxjs';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn = false;

  private entries: User[] = [
    {
      username: 'test',
      password: 'test',
    },
    {
      username: 'wew',
      password: '123',
    },
    {
      username: 'tester',
      password: 'beta'
    },
    {
      username: 'a',
      password: 'a',
    }
  ];

  constructor() { }

  isLoggedIn(): Observable<boolean> {
    return of(this.loggedIn);
  }

  login(username: string, password: string): boolean {
    this.entries.forEach(user => {
      if (user.username === username && user.password === password) {
        this.loggedIn = true;
      } else {
      }
    });
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }

  addUser(username: string, password: string): void {
    this.entries.push({ username, password });
  }
}
