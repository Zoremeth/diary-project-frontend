import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-viewer-entrylist-rename-dialog',
  templateUrl: './viewer-entrylist-rename-dialog.component.html',
  styleUrls: ['./viewer-entrylist-rename-dialog.component.css']
})
export class ViewerEntrylistRenameDialogComponent implements OnInit {

  newString!: string;

  // tslint:disable-next-line:max-line-length
  constructor(public thisDialogRef: MatDialogRef<ViewerEntrylistRenameDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

}
