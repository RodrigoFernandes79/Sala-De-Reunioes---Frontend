import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomListsComponent } from './room-lists.component';

describe('RoomListsComponent', () => {
  let component: RoomListsComponent;
  let fixture: ComponentFixture<RoomListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
