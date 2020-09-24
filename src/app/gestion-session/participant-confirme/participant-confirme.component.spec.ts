import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantConfirmeComponent } from './participant-confirme.component';

describe('ParticipantConfirmeComponent', () => {
  let component: ParticipantConfirmeComponent;
  let fixture: ComponentFixture<ParticipantConfirmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantConfirmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantConfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
