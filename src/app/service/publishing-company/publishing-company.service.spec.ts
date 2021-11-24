import { TestBed } from '@angular/core/testing';

import { PublishingCompanyService } from './publishing-company.service';

describe('PublishingCompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublishingCompanyService = TestBed.get(PublishingCompanyService);
    expect(service).toBeTruthy();
  });
});
