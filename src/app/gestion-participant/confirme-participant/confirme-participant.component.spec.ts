import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmeParticipantComponent } from './confirme-participant.component';

describe('ConfirmeParticipantComponent', () => {
  let component: ConfirmeParticipantComponent;
  let fixture: ComponentFixture<ConfirmeParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmeParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmeParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
