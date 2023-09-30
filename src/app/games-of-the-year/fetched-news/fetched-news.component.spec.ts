import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchedNewsComponent } from './fetched-news.component';

describe('FetchedNewsComponent', () => {
  let component: FetchedNewsComponent;
  let fixture: ComponentFixture<FetchedNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchedNewsComponent]
    });
    fixture = TestBed.createComponent(FetchedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
