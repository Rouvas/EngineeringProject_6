import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpersonsComponent } from './adminpersons.component';

describe('AdminpersonsComponent', () => {
  let component: AdminpersonsComponent;
  let fixture: ComponentFixture<AdminpersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
