import { TestBed } from '@angular/core/testing';

import { UniversidadService} from './services/universidad.service';

describe('NombService', () => {
  let service: UniversidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
