import { Component, OnInit, Inject } from '@angular/core';
import { EntryService, Entry } from '../data-puller.service';
import { SidebarService } from '../sidebar.service';
import { MatDialog } from '@angular/material';
import { ViewerEntrylistDeleteDialogComponent } from '../viewer-entrylist-delete-dialog/viewer-entrylist-delete-dialog.component';
import { ViewerEntrylistRenameDialogComponent } from '../viewer-entrylist-rename-dialog/viewer-entrylist-rename-dialog.component';

@Component({
  selector: 'app-viewer-entrylist',
  templateUrl: './viewer-entrylist.component.html',
  styleUrls: ['./viewer-entrylist.component.css']
})
export class ViewerEntrylistComponent implements OnInit {

  entries: Entry[] = [];

  constructor(public entryService: EntryService, public sidebar: SidebarService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  getEntries(): Entry[] {
    this.entryService.getEntries().subscribe(entries => this.entries = entries);
    return this.entries;
  }

  delete(id: number) {
    console.log('Deleting: ' + id);
    const dialogRef = this.dialog.open(ViewerEntrylistDeleteDialogComponent);
    dialogRef.afterClosed().subscribe(deleteConfirmed => {
      if (deleteConfirmed) {
        this.entryService.deleteEntry(id);
      }
    });
  }

  rename(id: number): void {
    const titleFromId = this.entryService.getTitle(id);
    const dialogRef = this.dialog.open(ViewerEntrylistRenameDialogComponent, {
      data: { title: titleFromId }
    });
    dialogRef.afterClosed().subscribe(newString => {
      this.entryService.setTitle(id, newString);
    });
  }

  alertEditor(id: number) {
    this.entryService.setCurrentEntry(id);
  }
}
