import { TestBed, inject } from '@angular/core/testing';

import { DatapullerService } from './datapuller.service';

describe('DatapullerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatapullerService]
    });
  });

  it('should be created', inject([DatapullerService], (service: DatapullerService) => {
    expect(service).toBeTruthy();
  }));
});
