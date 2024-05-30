import { TestBed } from '@angular/core/testing';

import { DetusuarioempresaService } from './detusuarioempresa.service';

describe('DetusuarioempresaService', () => {
  let service: DetusuarioempresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetusuarioempresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
