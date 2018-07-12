import { Component, OnInit, ViewChild } from '@angular/core';
import { EntryService } from '../entryservice.service';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import Quill from 'quill';


import Counter from './counter';
Quill.register('modules/counter', Counter);

@Component({
  selector: 'app-viewer-editor',
  templateUrl: './viewer-editor.component.html',
  styleUrls: ['./viewer-editor.component.css'],
})
export class ViewerEditorComponent implements OnInit {

  constructor(public entryService: EntryService) { }

  @ViewChild('editor') editorQuill!: QuillEditorComponent;

  getTitle(): string {
    return this.entryService.getTitle(this.entryService.getCurrentEntry());
  }

  getDate(): string {
    return this.entryService.getDate(this.entryService.getCurrentEntry());
  }

  getContent(): string {
    return this.entryService.getContent(this.entryService.getCurrentEntry());
  }

  writeValue(): void {
    console.log(this.editorQuill.formats);
  }

  ngOnInit() {
    this.editorQuill.onContentChanged.subscribe((data: any) => { console.log(data); });
  }
}
