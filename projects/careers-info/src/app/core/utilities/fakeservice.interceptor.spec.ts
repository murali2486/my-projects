import { TestBed } from '@angular/core/testing';

import { FakeserviceInterceptor } from './fakeservice.interceptor';

describe('FakeserviceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FakeserviceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FakeserviceInterceptor = TestBed.inject(FakeserviceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
