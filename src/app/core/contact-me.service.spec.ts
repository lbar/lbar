import { TestBed } from '@angular/core/testing';

import { ContactMeService, EMAIL_JS_CONFIG } from './contact-me.service';

describe('ContactMeService', () => {
  let service: ContactMeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: EMAIL_JS_CONFIG,
          useValue: {
            serviceID: 'SERVICE_ID',
            templateID: 'TEMPLATE_ID',
            userID: 'USER_ID',
          },
        },
        ContactMeService,
      ],
    });
    service = TestBed.inject(ContactMeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
