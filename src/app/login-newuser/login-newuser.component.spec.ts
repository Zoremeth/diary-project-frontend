import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNewuserComponent } from './login-newuser.component';

describe('LoginNewuserComponent', () => {
  let component: LoginNewuserComponent;
  let fixture: ComponentFixture<LoginNewuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNewuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
