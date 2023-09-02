import { TestBed } from '@angular/core/testing';

import { GamesOfTheYearService } from './games-of-the-year.service';

describe('GamesOfTheYearService', () => {
  let service: GamesOfTheYearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesOfTheYearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
