import { TestBed } from '@angular/core/testing';

import { LeadershipviewService } from './leadershipview.service';

describe('LeadershipviewService', () => {
  let service: LeadershipviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadershipviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
