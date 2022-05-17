import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { NasaService } from './nasa.service';

describe('NasaService', () => {
  let service: NasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [NasaService]
    });
    service = TestBed.inject(NasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
