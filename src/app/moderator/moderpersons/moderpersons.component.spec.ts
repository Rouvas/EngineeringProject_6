import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerpersonsComponent } from './moderpersons.component';

describe('ModerpersonsComponent', () => {
  let component: ModerpersonsComponent;
  let fixture: ComponentFixture<ModerpersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModerpersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModerpersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
