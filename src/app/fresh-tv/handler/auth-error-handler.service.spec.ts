import { TestBed, inject } from '@angular/core/testing';

import { AuthErrorHandlerService } from './auth-error-handler.service';

describe('AuthErrorHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthErrorHandlerService]
    });
  });

  it('should be created', inject([AuthErrorHandlerService], (service: AuthErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
