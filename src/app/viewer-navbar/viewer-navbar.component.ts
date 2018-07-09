import { Component, OnInit } from '@angular/core';
import { DatapullerService } from '../data-puller.service';

@Component({
  selector: 'app-viewer-navbar',
  templateUrl: './viewer-navbar.component.html',
  styleUrls: ['./viewer-navbar.component.css']
})
export class ViewerNavbarComponent implements OnInit {

  constructor(public dataPuller: DatapullerService) { }

  ngOnInit() {
  }

}
