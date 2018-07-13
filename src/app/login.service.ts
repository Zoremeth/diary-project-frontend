import { Injectable } from '@angular/core';
import { Observable, of } from '../../node_modules/rxjs';

export interface User {
  id: number;
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
      id: 0,
      username: 'test',
      password: 'test',
    },
    {
      id: 1,
      username: 'wew',
      password: '123',
    },
    {
      id: 2,
      username: 'tester',
      password: 'beta'
    },
    {
      id: 3,
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
}
