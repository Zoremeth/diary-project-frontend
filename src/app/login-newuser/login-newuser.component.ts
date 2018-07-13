import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-login-newuser',
  templateUrl: './login-newuser.component.html',
  styleUrls: ['./login-newuser.component.css']
})
export class LoginNewuserComponent implements OnInit {

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
