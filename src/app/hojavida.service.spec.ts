import { TestBed } from '@angular/core/testing';

import { HojavidaService} from './services/hojavida.service';

describe('NombService', () => {
  let service: HojavidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HojavidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
