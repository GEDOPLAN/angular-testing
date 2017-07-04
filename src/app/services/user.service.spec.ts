import { TestBed, inject, async } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpModule } from '@angular/http';


describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [UserService]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should load a least some users', async(inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
    service.getUsers().subscribe(r => {
      expect(r.length).toBeGreaterThan(100);
    });
  })));
});
