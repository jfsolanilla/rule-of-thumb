import { TestBed } from '@angular/core/testing';

import { CelebritiesService } from './celebrity.service';

describe('CelebritiesService', () => {
  let service: CelebritiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelebritiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
