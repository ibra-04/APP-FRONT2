import { TestBed } from '@angular/core/testing';

import { CategoService } from './catego.service';

describe('HaniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoService = TestBed.get(CategoService);
    expect(service).toBeTruthy();
  });
});
