import { TestBed } from '@angular/core/testing';

import { DetallesLuchadorGuardaService } from './detalles-luchador-guarda.service';

describe('DetallesLuchadorGuardaService', () => {
  let service: DetallesLuchadorGuardaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesLuchadorGuardaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
