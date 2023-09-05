import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencriticFetchedComponent } from './opencritic-fetched.component';

describe('OpencriticFetchedComponent', () => {
  let component: OpencriticFetchedComponent;
  let fixture: ComponentFixture<OpencriticFetchedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpencriticFetchedComponent]
    });
    fixture = TestBed.createComponent(OpencriticFetchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
