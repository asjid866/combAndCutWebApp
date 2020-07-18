import { TestBed } from '@angular/core/testing';

import { SendBookingEmailService } from './send-booking-email.service';

describe('SendBookingEmailService', () => {
  let service: SendBookingEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendBookingEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
