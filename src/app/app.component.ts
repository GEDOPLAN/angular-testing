import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {

  public users: any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUser();
  }

  public loadUser() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
