import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-viewer-entrylist-protect-dialog',
  templateUrl: './viewer-entrylist-protect-dialog.component.html',
  styleUrls: ['./viewer-entrylist-protect-dialog.component.css']
})
export class ViewerEntrylistProtectDialogComponent implements OnInit {

  password!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

}