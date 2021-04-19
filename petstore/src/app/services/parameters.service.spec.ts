import { ParametersServiceMock } from './../mocks/parameters-mock';
import { TestBed } from '@angular/core/testing';

import { ParametersService } from './parameters.service';

describe('ParametersService', () => {
  let service: ParametersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ParametersService,
          useClass: ParametersServiceMock
        }
      ]
    });
    service = TestBed.inject(ParametersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
