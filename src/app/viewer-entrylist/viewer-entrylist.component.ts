import { Component, OnInit, Inject } from '@angular/core';
import { EntryService, Entry } from '../entryservice.service';
import { SidebarService } from '../sidebar.service';
import { MatDialog } from '@angular/material';
import { ViewerEntrylistDeleteDialogComponent } from '../viewer-entrylist-delete-dialog/viewer-entrylist-delete-dialog.component';
import { ViewerEntrylistRenameDialogComponent } from '../viewer-entrylist-rename-dialog/viewer-entrylist-rename-dialog.component';
import { Observable } from '../../../node_modules/rxjs';
import { ViewerEntrylistAddDialogComponent } from '../viewer-entrylist-add-dialog/viewer-entrylist-add-dialog.component';

@Component({
  selector: 'app-viewer-entrylist',
  templateUrl: './viewer-entrylist.component.html',
  styleUrls: ['./viewer-entrylist.component.css']
})
export class ViewerEntrylistComponent implements OnInit {

  entries$: Observable<Entry[]>;

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
      data: { title: '' }
    });
    // dialogRef.afterClosed().subscribe(newTitle => {
    //   entry.title = newTitle.title;
    //   entry.id =
    // });
  }

  alertEditor(id: number) {
    this.entryService.setCurrent(id);
  }
}
