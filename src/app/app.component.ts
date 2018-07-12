import { Component } from '@angular/core';
import { EntryService } from './entryservice.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  loginState = false;

  constructor(public loginService: LoginService) { }

  isLoggedIn(): boolean {
    this.loginService.isLoggedIn().subscribe(state => this.loginState = state);
    return this.loginState;
  }
}
