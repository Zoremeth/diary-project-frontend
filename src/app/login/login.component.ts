import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  animation = '';

  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

  login(username: string, password: string): void {
    if (!this.loginService.login(username, password)) {
      this.animation = 'animated shake';
    }
  }
}
