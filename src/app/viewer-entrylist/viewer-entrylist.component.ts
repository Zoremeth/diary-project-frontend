import { Component, OnInit, Inject } from '@angular/core';
import { DatapullerService } from '../data-puller.service';
import { Entry } from '../entry';
import { SidebarService } from '../sidebar.service';
import { MatDialog } from '@angular/material';
import { ViewerEntrylistDeleteDialogComponent } from '../viewer-entrylist-delete-dialog/viewer-entrylist-delete-dialog.component';

@Component({
  selector: 'app-viewer-entrylist',
  templateUrl: './viewer-entrylist.component.html',
  styleUrls: ['./viewer-entrylist.component.css']
})
export class ViewerEntrylistComponent implements OnInit {

  entries!: Entry[];
  dialogResult!: boolean;

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
    this.openDeleteDialog(id);
    alert(this.dialogResult);
  }

  openDeleteDialog(id: number): boolean {
    const dialogRef = this.dialog.open(ViewerEntrylistDeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.dialogResult = result;
    });
    return this.dialogResult;
  }

  alertEditor(id: number) {
    this.dataPuller.setCurrentEntry(id);
  }
}
