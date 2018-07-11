import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-viewer-entrylist-delete-dialog',
  templateUrl: './viewer-entrylist-delete-dialog.component.html',
  styleUrls: ['./viewer-entrylist-delete-dialog.component.css']
})
export class ViewerEntrylistDeleteDialogComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<ViewerEntrylistDeleteDialogComponent>) { }

  ngOnInit() {
  }

}
