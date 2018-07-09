import { Component, OnInit } from '@angular/core';
import { DatapullerService } from '../datapuller.service';

@Component({
  selector: 'app-viewer-editor',
  templateUrl: './viewer-editor.component.html',
  styleUrls: ['./viewer-editor.component.css'],
})
export class ViewerEditorComponent implements OnInit {


  constructor(public dataPuller: DatapullerService) { }

  getDate(): String {
    return this.dataPuller.getDate(this.dataPuller.getCurrentEntry());
  }

  getContent(): String {
    return this.dataPuller.getContent(this.dataPuller.getCurrentEntry());
  }

  ngOnInit() {
  }

}
