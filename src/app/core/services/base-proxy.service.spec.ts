import { TestBed } from '@angular/core/testing';

import { BaseProxyService } from './base-proxy.service';

describe('BaseProxyService', () => {
  let service: BaseProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
