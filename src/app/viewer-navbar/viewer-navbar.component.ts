import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-viewer-navbar',
  templateUrl: './viewer-navbar.component.html',
  styleUrls: ['./viewer-navbar.component.css']
})

export class ViewerNavbarComponent implements OnInit {

  private icon!: string;

  constructor(public sidebar: SidebarService) { }

  ngOnInit() {
  }

  getIcon(): string {
    this.sidebar.getIcon().subscribe(iconstate => this.icon = iconstate);
    return this.icon;
  }

  alert(test: string) {
    alert(test);
  }
}
