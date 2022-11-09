import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataUser, ISingleUser } from '../_interfaces/user';

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

  // Show: c'est un user de type: ISingleUser
  getUser(id: string | null): Observable<ISingleUser> {
    return this.http.get<ISingleUser>(this.url + '/' + id)
  }
}
