import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerNavbarComponent } from './viewer-navbar.component';

describe('ViewerNavbarComponent', () => {
  let component: ViewerNavbarComponent;
  let fixture: ComponentFixture<ViewerNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
