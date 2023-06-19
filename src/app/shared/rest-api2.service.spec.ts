import { TestBed } from '@angular/core/testing';

import { RestApi2Service } from './rest-api2.service';

describe('RestApi2Service', () => {
  let service: RestApi2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApi2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
