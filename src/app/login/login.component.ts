import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { MatDialog } from '@angular/material';
import { LoginRegisterComponent } from '../register/login-register.component';
import { DataService } from '../shared/data.service';
import { SnackbarService } from '../shared/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  animation = '';

  constructor(public loginService: LoginService,
    public dialog: MatDialog, public dataService: DataService, public snackBar: SnackbarService) { }

  ngOnInit() {
  }

  login(username: string, password: string): void {
    if (!this.loginService.login(username, password)) {
      this.animation = 'animated shake';
      this.snackBar.openSnackbar('Incorrect username/password');
    }
  }

  newUser(): void {
    const dialogRef = this.dialog.open(LoginRegisterComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(data => {
      this.loginService.addUser(data.username, data.password);
    });
  }

}
