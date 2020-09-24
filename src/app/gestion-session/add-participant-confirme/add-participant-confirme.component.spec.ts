import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParticipantConfirmeComponent } from './add-participant-confirme.component';

describe('AddParticipantConfirmeComponent', () => {
  let component: AddParticipantConfirmeComponent;
  let fixture: ComponentFixture<AddParticipantConfirmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParticipantConfirmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParticipantConfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
