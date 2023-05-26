import { TestBed } from '@angular/core/testing';

import { BookLogicService } from './book-logic.service';

describe('BookLogicService', () => {
  let service: BookLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
