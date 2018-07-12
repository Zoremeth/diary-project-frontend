import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';
@Component({
  selector: 'app-viewer-entrylist-add-dialog',
  templateUrl: './viewer-entrylist-add-dialog.component.html',
  styleUrls: ['./viewer-entrylist-add-dialog.component.css']
})
export class ViewerEntrylistAddDialogComponent implements OnInit {
  title = 'henlo';
  date = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

}
