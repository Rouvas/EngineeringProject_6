import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminworktimesComponent } from './adminworktimes.component';

describe('AdminworktimesComponent', () => {
  let component: AdminworktimesComponent;
  let fixture: ComponentFixture<AdminworktimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminworktimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminworktimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
