import { Injectable } from '@angular/core';
import { Observable, of } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn = false;

  constructor() { }

  isLoggedIn(): Observable<boolean> {
    return of(this.loggedIn);
  }

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
