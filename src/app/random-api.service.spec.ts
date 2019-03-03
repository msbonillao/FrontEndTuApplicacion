import { TestBed } from '@angular/core/testing';

import { RandomApiService } from './random-api.service';

describe('RandomApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomApiService = TestBed.get(RandomApiService);
    expect(service).toBeTruthy();
  });
});
