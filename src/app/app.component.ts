import { Component } from '@angular/core';
import { EntryService } from './entryservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public entryService: EntryService) { }

  isLoggedIn(): boolean {
    return this.entryService.getLoginState();
  }
}
