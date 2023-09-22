import { TestBed } from '@angular/core/testing';

import { ViewSelectionService } from './view-selection-menu.service';

describe('ViewSelectionMenuService', () => {
  let service: ViewSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
