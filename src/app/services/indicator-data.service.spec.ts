import { TestBed } from '@angular/core/testing';

import { IndicatorDataService } from './indicator-data.service';

describe('IndicatorDataService', () => {
  let service: IndicatorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndicatorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
