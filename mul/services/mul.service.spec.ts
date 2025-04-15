import { TestBed } from '@angular/core/testing';

import { MulService } from './mul.service';

describe('MulService', () => {
  let service: MulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
