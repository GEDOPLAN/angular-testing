import { TestBed, async, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

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
      imports: [HttpModule, FormsModule],
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
    (<any>component).showMaxUserCount = 5;
    component.loadUser();
    expect(component.users.length).toBeGreaterThan(0);
    expect(component.users[0].username).toEqual('mocked');
  }));

  it('should load limit users', async(() => {
    const maxUser = component.form.form.get('maxUser');
    const btn = fixture.nativeElement.querySelector('button[name="loadBtn"]');

    expect(maxUser).toBeTruthy();
    expect(btn).toBeTruthy();

    maxUser.setValue(1);
    btn.click();
    fixture.detectChanges();
    let elecount = fixture.nativeElement.querySelectorAll('.portfolio-item').length;
    expect(elecount).toBe(1);

    maxUser.setValue(3);
    btn.click();
    fixture.detectChanges();
    elecount = fixture.nativeElement.querySelectorAll('.portfolio-item').length;
    expect(elecount).toBe(3);
  }));

  it('should call load method on button click', async(() => {
    const userService = (<any>component).userService;
    const btn = fixture.nativeElement.querySelector('button[name="loadBtn"]');

    const spy = spyOn(userService, 'getUsers');
    btn.click();
    btn.click();
    btn.click();
    spy.and.callThrough();

    expect(spy.calls.count()).toBe(3);
  }));
});
