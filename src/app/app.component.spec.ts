import { TestBed, async, fakeAsync, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService } from './services/user.service';
import { UserServiceMock } from './services/user.service.mocked';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [
        AppComponent, UserListComponent
      ]
    }).overrideComponent(AppComponent, {
      set: {
        providers: [
          { provide: UserService, useClass: UserServiceMock }
        ]
      }
    }).compileComponents();
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));


  it('should list mocked-users', async(() => {
    expect(component).toBeTruthy();
    expect(component.users.length).toBeGreaterThan(0);
    expect(component.users[0].username).toEqual('mocked');
  }));
});
