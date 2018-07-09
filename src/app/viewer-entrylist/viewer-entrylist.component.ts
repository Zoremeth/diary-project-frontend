import { Component, OnInit } from '@angular/core';
import { DatapullerService } from '../data-puller.service';

@Component({
  selector: 'app-viewer-entrylist',
  templateUrl: './viewer-entrylist.component.html',
  styleUrls: ['./viewer-entrylist.component.css']
})
export class ViewerEntrylistComponent implements OnInit {

  constructor(public dataPuller: DatapullerService) { }

  ngOnInit() {
  }

  alertEditor(id: number) {
    this.dataPuller.setCurrentEntry(id);
  }

}
