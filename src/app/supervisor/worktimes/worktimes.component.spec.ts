import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktimesComponent } from './worktimes.component';

describe('WorktimesComponent', () => {
  let component: WorktimesComponent;
  let fixture: ComponentFixture<WorktimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorktimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorktimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
