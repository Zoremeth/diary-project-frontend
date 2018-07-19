import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerEntrylistAddDialogComponent } from './viewer-entrylist-add-dialog.component';

describe('ViewerEntrylistAddDialogComponent', () => {
  let component: ViewerEntrylistAddDialogComponent;
  let fixture: ComponentFixture<ViewerEntrylistAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerEntrylistAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerEntrylistAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
