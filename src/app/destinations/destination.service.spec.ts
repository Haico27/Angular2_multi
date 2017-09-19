/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { destinationService } from './destination.service';

describe('destinationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [destinationService]
    });
  });

  it('should ...', inject([destinationService], (service: destinationService) => {
    expect(service).toBeTruthy();
  }));
});
