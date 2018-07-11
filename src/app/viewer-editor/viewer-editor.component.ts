import { Component, OnInit } from '@angular/core';
import { EntryService } from '../data-puller.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-viewer-editor',
  templateUrl: './viewer-editor.component.html',
  styleUrls: ['./viewer-editor.component.css'],
})
export class ViewerEditorComponent implements OnInit {


  constructor(public entryService: EntryService) { }

  getTitle(): string {
    return this.entryService.getTitle(this.entryService.getCurrentEntry());
  }

  getDate(): string {
    return this.entryService.getDate(this.entryService.getCurrentEntry());
  }

  getContent(): string {
    return this.entryService.getContent(this.entryService.getCurrentEntry());
  }

  openEditor() {
    // Do something
  }

  ngOnInit() {
  }

}
