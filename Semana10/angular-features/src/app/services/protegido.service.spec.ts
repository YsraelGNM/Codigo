import { TestBed } from '@angular/core/testing';

import { ProtegidoService } from './protegido.service';

describe('ProtegidoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProtegidoService = TestBed.get(ProtegidoService);
    expect(service).toBeTruthy();
  });
});
