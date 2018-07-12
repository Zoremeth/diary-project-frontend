import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entryservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(public entryService: EntryService) { }

  ngOnInit() {
  }

  login(): void {
    this.entryService.setLoginState(true);
  }
}
