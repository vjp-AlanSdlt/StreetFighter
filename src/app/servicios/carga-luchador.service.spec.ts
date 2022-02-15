import { TestBed } from '@angular/core/testing';

import { CargaLuchadorService } from './carga-luchador.service';

describe('CargaLuchadorService', () => {
  let service: CargaLuchadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaLuchadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
