import { TestBed } from '@angular/core/testing';

import { CargarScriptsServicioService } from './cargar-scripts-servicio.service';

describe('CargarScriptsServicioService', () => {
  let service: CargarScriptsServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarScriptsServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
