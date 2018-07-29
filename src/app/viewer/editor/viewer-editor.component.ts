import { Component, OnInit, ViewChild } from '@angular/core';
import { EntryService, Entry } from '../shared/entryservice.service';
import { Observable } from 'rxjs';
import { timeout } from 'q';
import { LoginService } from '../../login/login.service';

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

  ngOnInit() {

  }

  save(): void {
    this.currentEntry$.subscribe(data => {
      // Ignore
      this.entryService.saveEntries(data.id, data.content);
    });
  }
}
