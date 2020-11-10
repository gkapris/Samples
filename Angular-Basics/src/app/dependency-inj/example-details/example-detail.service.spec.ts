import { TestBed } from '@angular/core/testing';

import { ExampleDetailService } from './example-detail.service';

describe('ExampleDetailService', () => {
  let service: ExampleDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
