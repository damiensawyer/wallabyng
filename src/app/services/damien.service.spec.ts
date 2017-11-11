import { TestBed, inject } from '@angular/core/testing';

import { DamienService } from './damien.service';

describe('DamienService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DamienService]
    });
  });

  it(
    'should be created',
    inject([DamienService], (service: DamienService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'should add',
    inject([DamienService], (service: DamienService) => {
      expect(service.addNumbers(5, 10)).toBe(15);
    })
  );
});
