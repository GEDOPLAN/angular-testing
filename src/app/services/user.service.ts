import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers(): Observable<any[]> {
    return this.http.get('http://jsonplaceholder.typicode.com/users').map(r => r.json());
  }

}
