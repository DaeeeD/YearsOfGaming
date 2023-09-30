import { TestBed } from '@angular/core/testing';

import { FetchedNewsService } from './fetched-news.service';

describe('FetchedNewsService', () => {
  let service: FetchedNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchedNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
