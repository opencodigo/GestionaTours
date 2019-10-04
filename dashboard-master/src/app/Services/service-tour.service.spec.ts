import { TestBed } from '@angular/core/testing';

import { ServiceTourService } from './service-tour.service';

describe('ServiceTourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceTourService = TestBed.get(ServiceTourService);
    expect(service).toBeTruthy();
  });
});
