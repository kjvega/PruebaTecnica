import { TestBed } from '@angular/core/testing';

import { VerifyTokenInterceptor } from './verify-token.interceptor';

describe('VerifyTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      VerifyTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: VerifyTokenInterceptor = TestBed.inject(VerifyTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
