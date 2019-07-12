import { TestBed } from '@angular/core/testing';

import { PlayaService } from './playa.service';

describe('PlayaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayaService = TestBed.get(PlayaService);
    expect(service).toBeTruthy();
  });
});
