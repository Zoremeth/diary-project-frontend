import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

  login(): void {
    console.log(this.username + ' ' + this.password);
    this.loginService.login();
  }
}
