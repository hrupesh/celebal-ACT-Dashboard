import { TestBed } from '@angular/core/testing';

import { VedantaService } from './vedanta.service';

describe('VedantaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VedantaService = TestBed.get(VedantaService);
    expect(service).toBeTruthy();
  });
});
