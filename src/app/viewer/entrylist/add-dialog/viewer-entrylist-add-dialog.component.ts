import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-viewer-entrylist-add-dialog',
  templateUrl: './viewer-entrylist-add-dialog.component.html',
  styleUrls: ['./viewer-entrylist-add-dialog.component.css']
})
export class ViewerEntrylistAddDialogComponent implements OnInit {
  title = 'henlo';
  date = '';
  disabled = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  checkDisabled(title: string, date: string): boolean {
    let disabled = true;
    if (title !== '' && title !== undefined) {
      if (date !== '' && date !== undefined) {
        disabled = false;
      }
    }
    return disabled;
  }

}

