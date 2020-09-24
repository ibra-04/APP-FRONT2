import { TestBed } from '@angular/core/testing';

import { GestionFormateurService } from './Gestion-formateur.service';

describe('FormateurServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionFormateurService = TestBed.get(GestionFormateurService);
    expect(service).toBeTruthy();
  });
});
