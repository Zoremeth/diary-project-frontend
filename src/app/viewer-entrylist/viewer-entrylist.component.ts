import { Component, OnInit, Inject } from '@angular/core';
import { DatapullerService } from '../data-puller.service';
import { Entry } from '../entry';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-viewer-entrylist',
  templateUrl: './viewer-entrylist.component.html',
  styleUrls: ['./viewer-entrylist.component.css']
})
export class ViewerEntrylistComponent implements OnInit {

  entries!: Entry[];

  constructor(public dataPuller: DatapullerService, public sidebar: SidebarService) { }

  ngOnInit() {
  }

  getEntries(): Entry[] {
    this.dataPuller.getEntries().subscribe(entries => this.entries = entries);
    return this.entries;
  }

  rename(id: number) {
    console.log('Renaming: ' + id);
    // OPEN DIALOG
  }

  delete(id: number) {
    console.log('Deleting: ' + id);
    // OPEN CONFIRMATION DIALOG
  }

  alertEditor(id: number) {
    this.dataPuller.setCurrentEntry(id);
  }
}
