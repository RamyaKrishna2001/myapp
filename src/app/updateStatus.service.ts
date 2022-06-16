import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserType } from './user/user-details.model';

@Injectable({ providedIn: 'root' })
export class UpdateStatusService {
  activatedEmitter = new Subject<boolean>();
  _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _api: HttpClient) {}

  getUsersData() {
    return this._api.get<UserType>(this._url);
  }
}
