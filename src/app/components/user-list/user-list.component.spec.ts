import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';

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

  it('should show unser infos', async(() => {
    component.users = [

      {
        'id': 1,
        'name': 'Leanne Graham',
        'username': 'Klaus',
        'email': 'Sincere@april.biz',
        'address': {
          'street': 'Kulas Light',
          'suite': 'Apt. 556',
          'city': 'Gwenborough',
          'zipcode': '92998-3874',
          'geo': {
            'lat': '-37.3159',
            'lng': '81.1496'
          }
        },
        'phone': '1-770-736-8031 x56442',
        'website': 'hildegard.org',
        'company': {
          'name': 'Romaguera-Crona',
          'catchPhrase': 'Multi-layered client-server neural-net',
          'bs': 'harness real-time e-markets'
        }
      },
      {
        'id': 2,
        'name': 'Ervin Howell',
        'username': 'Antonette',
        'email': 'Shanna@melissa.tv',
        'address': {
          'street': 'Victor Plains',
          'suite': 'Suite 879',
          'city': 'Wisokyburgh',
          'zipcode': '90566-7771',
          'geo': {
            'lat': '-43.9509',
            'lng': '-34.4618'
          }
        },
        'phone': '010-692-6593 x09125',
        'website': 'anastasia.net',
        'company': {
          'name': 'Deckow-Crist',
          'catchPhrase': 'Proactive didactic contingency',
          'bs': 'synergize scalable supply-chains'
        }
      }
    ];

    fixture.detectChanges();
    const compiled: Element = fixture.debugElement.nativeElement;

    const firstUserName = compiled.querySelectorAll('h2').item(0).innerText;
    expect(firstUserName).toBe('Klaus');
  }));
});
