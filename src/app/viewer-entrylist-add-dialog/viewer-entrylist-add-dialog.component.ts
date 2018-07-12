import { Component, OnInit, Inject } from '@angular/core';
import { EntryService } from '../entryservice.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../node_modules/@angular/material';
import { getLocaleDayNames } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-viewer-entrylist-add-dialog',
  templateUrl: './viewer-entrylist-add-dialog.component.html',
  styleUrls: ['./viewer-entrylist-add-dialog.component.css']
})
export class ViewerEntrylistAddDialogComponent implements OnInit {
  title = 'henlo';
  date = '';
  constructor(public entryService: EntryService, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

}
