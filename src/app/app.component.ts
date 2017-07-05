import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {

  @ViewChild(NgForm)
  form: NgForm;

  public users: any[];

  private selectedUserId: number;

  private showMaxUserCount: number = 5;

  constructor(private userService: UserService) { }

  public loadUser() {
    this.userService.getUsers().subscribe(users => {
      this.users = users.slice(0, this.showMaxUserCount || 5);
    });
  }

  selectUser(user: any) {
    this.selectedUserId = user.id;
  }

}
