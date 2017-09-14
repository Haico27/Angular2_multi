/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DestinationsService } from './destinations.service';

describe('DestinationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DestinationsService]
    });
  });

  it('should ...', inject([DestinationsService], (service: DestinationsService) => {
    expect(service).toBeTruthy();
  }));
});
