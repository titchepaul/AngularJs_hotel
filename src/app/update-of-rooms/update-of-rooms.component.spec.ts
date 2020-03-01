import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOfRoomsComponent } from './update-of-rooms.component';

describe('UpdateOfRoomsComponent', () => {
  let component: UpdateOfRoomsComponent;
  let fixture: ComponentFixture<UpdateOfRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOfRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOfRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
