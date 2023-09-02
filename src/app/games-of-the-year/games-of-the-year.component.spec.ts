import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesOfTheYearComponent } from './games-of-the-year.component';

describe('GamesOfTheYearComponent', () => {
  let component: GamesOfTheYearComponent;
  let fixture: ComponentFixture<GamesOfTheYearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesOfTheYearComponent]
    });
    fixture = TestBed.createComponent(GamesOfTheYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
