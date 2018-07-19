import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerEntrylistDeleteDialogComponent } from './viewer-entrylist-delete-dialog.component';

describe('ViewerEntrylistDeleteDialogComponent', () => {
  let component: ViewerEntrylistDeleteDialogComponent;
  let fixture: ComponentFixture<ViewerEntrylistDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewerEntrylistDeleteDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerEntrylistDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
