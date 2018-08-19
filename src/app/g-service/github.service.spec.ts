import { TestBed, inject } from '@angular/core/testing';

import { GithubServiceService } from './github.service';

describe('GithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubServiceService]
    });
  });

  it('should be created', inject([GithubServiceService], (service: GithubServiceService) => {
    expect(service).toBeTruthy();
  }));
});
