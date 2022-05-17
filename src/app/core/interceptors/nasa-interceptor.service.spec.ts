import { TestBed } from '@angular/core/testing';

import { NasaInterceptorService } from './nasa-interceptor.service';

describe('NasaInterceptorService', () => {
  let service: NasaInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
