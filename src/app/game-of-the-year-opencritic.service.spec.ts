import { TestBed } from '@angular/core/testing';

import { GameOfTheYearOpencriticService } from './game-of-the-year-opencritic.service';

describe('GameOfTheYearOpencriticService', () => {
  let service: GameOfTheYearOpencriticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameOfTheYearOpencriticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
