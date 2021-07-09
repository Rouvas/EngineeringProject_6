import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminworkplacesComponent } from './adminworkplaces.component';

describe('AdminworkplacesComponent', () => {
  let component: AdminworkplacesComponent;
  let fixture: ComponentFixture<AdminworkplacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminworkplacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminworkplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
