import { Component, OnInit } from '@angular/core';
import { DatapullerService } from '../data-puller.service';
import { ViewerComponent } from '../viewer/viewer.component';

@Component({
  selector: 'app-viewer-navbar',
  templateUrl: './viewer-navbar.component.html',
  styleUrls: ['./viewer-navbar.component.css']
})

export class ViewerNavbarComponent implements OnInit {

  private icon: String = 'menu';

  constructor(public dataPuller: DatapullerService, public sideNav: ViewerComponent) { }

  ngOnInit() {
  }

  close(): void {
    this.icon = 'menu';
  }

  open(): void {
    this.icon = 'close';
  }

  toggleMenu(): void {
    if (this.icon === 'menu') {
      this.sideNav.open();
      this.icon = 'close';
    } else {
      this.sideNav.close();
      this.icon = 'menu';
    }
  }

  getIcon(): String {
    return this.icon;
  }
}
