import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerEntrylistProtectDialogComponent } from './viewer-entrylist-protect-dialog.component';

describe('ViewerEntrylistProtectDialogComponent', () => {
  let component: ViewerEntrylistProtectDialogComponent;
  let fixture: ComponentFixture<ViewerEntrylistProtectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerEntrylistProtectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerEntrylistProtectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
