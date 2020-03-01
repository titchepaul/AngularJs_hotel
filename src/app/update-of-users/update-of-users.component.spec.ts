import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOfUsersComponent } from './update-of-users.component';

describe('UpdateOfUsersComponent', () => {
  let component: UpdateOfUsersComponent;
  let fixture: ComponentFixture<UpdateOfUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOfUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOfUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
