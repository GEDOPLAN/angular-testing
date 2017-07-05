import { TestBed, inject, async } from '@angular/core/testing';
import { XHRBackend, ResponseOptions, Response } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { UserService } from './user.service';
import { HttpModule } from '@angular/http';
import { USER_DATA } from './user.service.mocked';


describe('UserService (with mocked Backend)', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        UserService
      ]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should load a least some users', async(inject([UserService, XHRBackend], (service: UserService, mockBackend: MockBackend) => {
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(USER_DATA)
      })));
    });

    expect(service).toBeTruthy();
    service.getUsers().subscribe(r => {
      console.log(r);
      expect(r.length).toBeGreaterThan(2);
    });
  })));
});
