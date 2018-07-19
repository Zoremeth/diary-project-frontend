import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Entry, EntryService } from '../shared/entryservice.service';
import { SidebarService } from '../../shared/sidebar.service';
import { ViewerEntrylistDeleteDialogComponent } from './delete-dialog/viewer-entrylist-delete-dialog.component';
import { ViewerEntrylistRenameDialogComponent } from './rename-dialog/viewer-entrylist-rename-dialog.component';
import { ViewerEntrylistAddDialogComponent } from './add-dialog/viewer-entrylist-add-dialog.component';
import { ViewerEntrylistProtectDialogComponent } from './protect-dialog/viewer-entrylist-protect-dialog.component';
import { DataService } from '../../shared/data.service';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-viewer-entrylist',
  templateUrl: './viewer-entrylist.component.html',
  styleUrls: ['./viewer-entrylist.component.css']
})
export class ViewerEntrylistComponent implements OnInit {

  entries$: Observable<Entry[]>;
  button = 'lock';
  constructor(
    public entryService: EntryService,
    public sidebar: SidebarService,
    public dialog: MatDialog,
    public dataService: DataService,
    public loginService: LoginService,
  ) {
    this.entries$ = entryService.entries$;
  }

  ngOnInit() {
    this.dataService.getEntries(this.loginService.currentUser);
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
      if (givenPassword === entry.locked) {
        entry.locked = undefined;
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
        entry.locked = givenPassword;
        this.button = 'lock';
      }
    });
  }

  alertEditor(id: number) {
    this.entryService.setCurrent(id);
  }

  export(entry: Entry): void {
    const blob = new Blob([entry.content], { type: 'text/html' });
    const tempElem = document.createElement('a');
    tempElem.download = entry.title + '.html';
    tempElem.href = window.URL.createObjectURL(blob);
    tempElem.click();
  }
}
