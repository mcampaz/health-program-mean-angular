import { TestBed } from '@angular/core/testing';

import { AthleteDataService } from './athlete-data.service';

describe('AthleteDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AthleteDataService = TestBed.get(AthleteDataService);
    expect(service).toBeTruthy();
  });
});
