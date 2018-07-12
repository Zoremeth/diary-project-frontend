import { Component, OnInit, ViewChild } from '@angular/core';
import { EntryService, Entry } from '../entryservice.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-viewer-editor',
  templateUrl: './viewer-editor.component.html',
  styleUrls: ['./viewer-editor.component.css'],
})
export class ViewerEditorComponent implements OnInit {

  currentEntry$: Observable<Entry | undefined>;

  constructor(public entryService: EntryService) {
    this.currentEntry$ = entryService.currentEntry$;
  }

  ngOnInit(): void {

  }
}
