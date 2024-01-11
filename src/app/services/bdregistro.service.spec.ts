import { TestBed } from '@angular/core/testing';

import { BdregistroService } from './bdregistro.service';

describe('BdregistroService', () => {
  let service: BdregistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdregistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
