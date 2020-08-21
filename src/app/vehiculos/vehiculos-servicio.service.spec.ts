import { TestBed } from '@angular/core/testing';

import { VehiculosServicioService } from './vehiculos-servicio.service';

describe('VehiculosServicioService', () => {
  let service: VehiculosServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiculosServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
