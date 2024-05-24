import { TestBed } from '@angular/core/testing';

import { SearchOffersService } from './search-offers.service';

describe('SearchOffersService', () => {
  let service: SearchOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
