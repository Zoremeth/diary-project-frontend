import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { MatDialog } from '../../../node_modules/@angular/material';
import { LoginNewuserComponent } from '../login-newuser/login-newuser.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  animation = '';

  constructor(public loginService: LoginService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  login(username: string, password: string): void {
    if (!this.loginService.login(username, password)) {
      this.animation = 'animated shake';
    }
  }

  newUser(): void {
    const dialogRef = this.dialog.open(LoginNewuserComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
    });
  }
}
