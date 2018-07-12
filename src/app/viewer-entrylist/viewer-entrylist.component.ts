import { Component, OnInit, Inject } from '@angular/core';
import { EntryService, Entry } from '../entryservice.service';
import { SidebarService } from '../sidebar.service';
import { MatDialog } from '@angular/material';
import { ViewerEntrylistDeleteDialogComponent } from '../viewer-entrylist-delete-dialog/viewer-entrylist-delete-dialog.component';
import { ViewerEntrylistRenameDialogComponent } from '../viewer-entrylist-rename-dialog/viewer-entrylist-rename-dialog.component';
import { Observable } from '../../../node_modules/rxjs';
import { ViewerEntrylistAddDialogComponent } from '../viewer-entrylist-add-dialog/viewer-entrylist-add-dialog.component';
import { ViewerEntrylistProtectDialogComponent } from '../viewer-entrylist-protect-dialog/viewer-entrylist-protect-dialog.component';

@Component({
  selector: 'app-viewer-entrylist',
  templateUrl: './viewer-entrylist.component.html',
  styleUrls: ['./viewer-entrylist.component.css']
})
export class ViewerEntrylistComponent implements OnInit {

  entries$: Observable<Entry[]>;
  button = 'lock';
  buttonClick = 'alert("Hi")';
  constructor(
    public entryService: EntryService,
    public sidebar: SidebarService,
    public dialog: MatDialog
  ) {
    this.entries$ = entryService.entries$;
  }

  ngOnInit() {
  }

  delete(entry: Entry) {
    console.log('Deleting: ' + entry.id);
    const dialogRef = this.dialog.open(ViewerEntrylistDeleteDialogComponent);
    dialogRef.afterClosed().subscribe(deleteConfirmed => {
      if (deleteConfirmed) {
        this.entryService.delete(entry.id);
      }
    });
  }

  rename(entry: Entry): void {
    const titleFromId = entry.title;
    const dialogRef = this.dialog.open(ViewerEntrylistRenameDialogComponent, {
      data: { title: titleFromId }
    });
    dialogRef.afterClosed().subscribe(newTitle => {
      if (newTitle === '') {
        newTitle = undefined;
      }
      if (newTitle !== undefined) {
        entry.title = newTitle;
      }
    });
  }

  add(): void {
    const dialogRef = this.dialog.open(ViewerEntrylistAddDialogComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(newTitle => {
      const id = this.entryService.add(newTitle.title, newTitle.date, 'Start typing here!');
      this.alertEditor(id);
    });
  }

  unlock(entry: Entry) {
    const dialogRef = this.dialog.open(ViewerEntrylistProtectDialogComponent, {
      data: { title: 'Unlock', placeholder: 'Enter password to unlock entry' }
    });
    dialogRef.afterClosed().subscribe(givenPassword => {
      if (givenPassword === '') {
        givenPassword = undefined;
      }
      if (givenPassword === entry.protected) {
        entry.protected = undefined;
        this.button = 'more_vert';
      }
    });
  }

  lock(entry: Entry) {
    const dialogRef = this.dialog.open(ViewerEntrylistProtectDialogComponent, {
      data: { title: 'Lock', placeholder: 'Enter password to lock entry' }
    });
    dialogRef.afterClosed().subscribe(givenPassword => {
      if (givenPassword === '') {
        givenPassword = undefined;
      }
      if (givenPassword !== undefined) {
        entry.protected = givenPassword;
        this.button = 'lock';
      }
    });
  }

  alertEditor(id: number) {
    this.entryService.setCurrent(id);
  }
}
