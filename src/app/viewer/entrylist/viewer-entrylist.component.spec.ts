import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerEntrylistComponent } from './viewer-entrylist.component';

describe('ViewerEntrylistComponent', () => {
  let component: ViewerEntrylistComponent;
  let fixture: ComponentFixture<ViewerEntrylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerEntrylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerEntrylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
