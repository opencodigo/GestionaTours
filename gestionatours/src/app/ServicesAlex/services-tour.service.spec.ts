import { TestBed } from '@angular/core/testing';

import { ServicesTourService } from './services-tour.service';

describe('ServicesTourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesTourService = TestBed.get(ServicesTourService);
    expect(service).toBeTruthy();
  });
});
