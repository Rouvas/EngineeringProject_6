import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerworktimesComponent } from './moderworktimes.component';

describe('ModerworktimesComponent', () => {
  let component: ModerworktimesComponent;
  let fixture: ComponentFixture<ModerworktimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModerworktimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModerworktimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
