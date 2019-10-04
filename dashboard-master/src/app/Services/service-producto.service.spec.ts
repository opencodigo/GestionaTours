import { TestBed } from '@angular/core/testing';

import { ServiceProductoService } from './service-producto.service';

describe('ServiceProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceProductoService = TestBed.get(ServiceProductoService);
    expect(service).toBeTruthy();
  });
});
