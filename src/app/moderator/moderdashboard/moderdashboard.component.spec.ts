import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerdashboardComponent } from './moderdashboard.component';

describe('ModerdashboardComponent', () => {
  let component: ModerdashboardComponent;
  let fixture: ComponentFixture<ModerdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModerdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
