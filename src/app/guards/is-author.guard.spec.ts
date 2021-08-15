import { TestBed } from '@angular/core/testing';

import { IsAuthorGuard } from './is-author.guard';

describe('IsAuthorGuard', () => {
  let guard: IsAuthorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAuthorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
