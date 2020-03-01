import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedBySmComponent } from './booked-by-sm.component';

describe('BookedBySmComponent', () => {
  let component: BookedBySmComponent;
  let fixture: ComponentFixture<BookedBySmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedBySmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedBySmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
