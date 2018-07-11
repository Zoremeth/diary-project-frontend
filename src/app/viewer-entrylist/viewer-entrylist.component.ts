import { Component, OnInit, Inject } from '@angular/core';
import { DatapullerService, Entry } from '../data-puller.service';
import { SidebarService } from '../sidebar.service';
import { MatDialog } from '@angular/material';
import { ViewerEntrylistDeleteDialogComponent } from '../viewer-entrylist-delete-dialog/viewer-entrylist-delete-dialog.component';

@Component({
  selector: 'app-viewer-entrylist',
  templateUrl: './viewer-entrylist.component.html',
  styleUrls: ['./viewer-entrylist.component.css']
})
export class ViewerEntrylistComponent implements OnInit {

  entries: Entry[] = [];

  constructor(public dataPuller: DatapullerService, public sidebar: SidebarService, public dialog: MatDialog) { }

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
    const dialogRef = this.dialog.open(ViewerEntrylistDeleteDialogComponent);
    dialogRef.afterClosed().subscribe(deleteConfirmed => {
      if (deleteConfirmed) {
        this.dataPuller.deleteEntry(id);
      }
    });
  }

  alertEditor(id: number) {
    this.dataPuller.setCurrentEntry(id);
  }
}
