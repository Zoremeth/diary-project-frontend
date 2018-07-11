import { Component, OnInit } from '@angular/core';
import { DatapullerService } from '../data-puller.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-viewer-editor',
  templateUrl: './viewer-editor.component.html',
  styleUrls: ['./viewer-editor.component.css'],
})
export class ViewerEditorComponent implements OnInit {


  constructor(public dataPuller: DatapullerService) { }

  getDate(): string {
    return this.dataPuller.getDate(this.dataPuller.getCurrentEntry());
  }

  getContent(): string {
    return this.dataPuller.getContent(this.dataPuller.getCurrentEntry());
  }

  openEditor() {
    // Do something
  }

  ngOnInit() {
  }

}
