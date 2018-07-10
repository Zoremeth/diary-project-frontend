import { Component, OnInit } from '@angular/core';
import { ViewerNavbarComponent } from '../viewer-navbar/viewer-navbar.component';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  constructor() { }

  private isOpened!: boolean;

  ngOnInit() {
    this.isOpened = true;
  }

  close(): void {
    this.isOpened = false;
  }

  open(): void {
    this.isOpened = true;
  }
}
