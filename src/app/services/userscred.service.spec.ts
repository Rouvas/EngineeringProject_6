import { TestBed } from '@angular/core/testing';

import { UserscredService } from './userscred.service';

describe('UserscredService', () => {
  let service: UserscredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserscredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
