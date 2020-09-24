import { TestBed } from '@angular/core/testing';

import { ParticipantConfirmeService } from './participant-confirme.service';

describe('ParticipantConfirmeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParticipantConfirmeService = TestBed.get(ParticipantConfirmeService);
    expect(service).toBeTruthy();
  });
});
