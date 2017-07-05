import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  private selected: any;

  @Input()
  users: any[];

  @Output()
  onSelect: EventEmitter<any> = new EventEmitter<any>();

  select(user: any) {
    this.selected = user;
    this.onSelect.emit(user);
  }

}
