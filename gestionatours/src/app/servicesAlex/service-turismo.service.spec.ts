import { TestBed } from '@angular/core/testing';

import { ServiceTurismoService } from './service-turismo.service';

describe('ServiceTurismoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceTurismoService = TestBed.get(ServiceTurismoService);
    expect(service).toBeTruthy();
  });
});
