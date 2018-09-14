import { TestBed, inject } from '@angular/core/testing';

import { MangaedenService } from './mangaeden.service';

describe('MangaedenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MangaedenService]
    });
  });

  it('should be created', inject([MangaedenService], (service: MangaedenService) => {
    expect(service).toBeTruthy();
  }));
});
