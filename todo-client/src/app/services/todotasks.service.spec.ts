import { TestBed, inject } from '@angular/core/testing';

import { TodotasksService } from './todotasks.service';

describe('TodotasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodotasksService]
    });
  });

  it('should be created', inject([TodotasksService], (service: TodotasksService) => {
    expect(service).toBeTruthy();
  }));
});
