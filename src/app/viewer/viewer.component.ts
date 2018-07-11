import { Component, OnInit } from '@angular/core';
import { ViewerNavbarComponent } from '../viewer-navbar/viewer-navbar.component';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  constructor(public sidebar: SidebarService) { }

  private isOpened!: boolean;

  ngOnInit() {
    this.isOpened = true;
  }

  getState(): boolean {
    this.sidebar.getState().subscribe(state => this.isOpened = state);
    return this.isOpened;
  }

  close(): void {
    this.isOpened = false;
  }

  open(): void {
    this.isOpened = true;
  }
}
