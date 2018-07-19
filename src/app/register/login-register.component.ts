import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  username = '';
  password = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  checkDisabled(username: string, password: string): boolean {
    let disabled = true;
    if (username !== '' && username !== undefined) {
      if (password !== '' && password !== undefined) {
        disabled = false;
      }
    }
    return disabled;
  }

}
