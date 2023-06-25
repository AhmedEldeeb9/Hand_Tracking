import { TestBed } from '@angular/core/testing';

import { ServiceurlsService } from './serviceurls.service';

describe('ServiceurlsService', () => {
  let service: ServiceurlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceurlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
