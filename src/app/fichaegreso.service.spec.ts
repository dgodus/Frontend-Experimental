import { TestBed } from '@angular/core/testing';

import { FichaegresoService} from './services/fichaegreso.service';

describe('NombService', () => {
  let service: FichaegresoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichaegresoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
