import { TestBed } from '@angular/core/testing';

import { DweetService } from './dweet.service';

describe('DweetService', () => {
  let service: DweetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DweetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
