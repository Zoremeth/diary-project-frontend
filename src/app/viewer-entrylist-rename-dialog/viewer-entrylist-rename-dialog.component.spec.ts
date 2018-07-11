import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerEntrylistRenameDialogComponent } from './viewer-entrylist-rename-dialog.component';

describe('ViewerEntrylistRenameDialogComponent', () => {
  let component: ViewerEntrylistRenameDialogComponent;
  let fixture: ComponentFixture<ViewerEntrylistRenameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerEntrylistRenameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerEntrylistRenameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
