import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesOfTheYearContentComponent } from './games-of-the-year-content.component';

describe('GamesOfTheYearContentComponent', () => {
  let component: GamesOfTheYearContentComponent;
  let fixture: ComponentFixture<GamesOfTheYearContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesOfTheYearContentComponent]
    });
    fixture = TestBed.createComponent(GamesOfTheYearContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
