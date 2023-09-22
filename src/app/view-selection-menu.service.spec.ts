import { TestBed } from '@angular/core/testing';

import { ViewSelectionMenuService } from './view-selection-menu.service';

describe('ViewSelectionMenuService', () => {
  let service: ViewSelectionMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewSelectionMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
