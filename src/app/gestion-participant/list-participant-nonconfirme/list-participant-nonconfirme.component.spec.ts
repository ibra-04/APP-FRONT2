import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParticipantNonconfirmeComponent } from './list-participant-nonconfirme.component';

describe('ListParticipantNonconfirmeComponent', () => {
  let component: ListParticipantNonconfirmeComponent;
  let fixture: ComponentFixture<ListParticipantNonconfirmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListParticipantNonconfirmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParticipantNonconfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
