import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataUser, ISingleUser, IUser } from '../_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8888/users'

  constructor(private http: HttpClient) { }

  // List: C'est un array users: IDataUser
  getAllUsers(): Observable<IDataUser> {
    return this.http.get<IDataUser>(this.url)
  }
}
