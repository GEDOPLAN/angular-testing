import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';

import { USER_DATA } from '../../services/user.service.mocked';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show unser infos', () => {
    component.users = [
      {username: 'mocked', mail: 'mocked@mock.de'}
    ];

    fixture.detectChanges();
    const compiled: Element = fixture.debugElement.nativeElement;

    const firstUserName = compiled.querySelectorAll('h2').item(0).innerText;
    expect(firstUserName).toBe('mocked');
  });
});
