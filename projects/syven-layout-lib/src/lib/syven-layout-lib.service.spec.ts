import { TestBed } from '@angular/core/testing';

import { SyvenLayoutLibService } from './syven-layout-lib.service';

describe('SyvenLayoutLibService', () => {
  let service: SyvenLayoutLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyvenLayoutLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
