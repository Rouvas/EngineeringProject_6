import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthsysComponent } from './authsys.component';

describe('AuthsysComponent', () => {
  let component: AuthsysComponent;
  let fixture: ComponentFixture<AuthsysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthsysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
