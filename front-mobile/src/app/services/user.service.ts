import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlApi = 'http://localhost:8888/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(urlApi);
  }

  get(id): Observable<any> {
    return this.http.get(`${urlApi}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(urlApi, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${urlApi}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${urlApi}/${id}`);
  }
}
