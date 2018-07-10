import { Component, OnInit, Input } from '@angular/core';
import { DatapullerService } from '../data-puller.service';
import { Entry } from '../entry';
import { ViewerComponent } from '../viewer/viewer.component';
import { ViewerNavbarComponent } from '../viewer-navbar/viewer-navbar.component';

@Component({
  selector: 'app-viewer-entrylist',
  templateUrl: './viewer-entrylist.component.html',
  styleUrls: ['./viewer-entrylist.component.css']
})
export class ViewerEntrylistComponent implements OnInit {

  entries!: Entry[];
  constructor(public dataPuller: DatapullerService, public sideNav: ViewerComponent, public menuButton: ViewerNavbarComponent) { }

  ngOnInit() {
  }

  getEntries(): Entry[] {
    this.dataPuller.getEntries().subscribe(entries => this.entries = entries);
    return this.entries;
  }

  alertEditor(id: number) {
    this.dataPuller.setCurrentEntry(id);
  }
}
