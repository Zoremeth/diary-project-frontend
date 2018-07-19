import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerEditorComponent } from './viewer-editor.component';

describe('ViewerEditorComponent', () => {
  let component: ViewerEditorComponent;
  let fixture: ComponentFixture<ViewerEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewerEditorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
