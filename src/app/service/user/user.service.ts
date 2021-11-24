import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  register(user: any): Observable<any> {
    return this.http.post<User>(API_URL + '/register', user);
  }

  resetPassword(user: any): Observable<any> {
    return this.http.put<any>(API_URL + '/resetpassword', user);
  }

  getAllUser(): Observable<any[]> {
    return this.http.get<any[]>(API_URL + '/accounts');
  }

  getUser(id: number): Observable<any> {
    return this.http.post<any>(API_URL + `/accounts`, id);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(API_URL + `/accounts`, user);
  }

  updatePassword(user: any): Observable<any> {
    return this.http.put<any>(API_URL + `/updatePassword`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + `/accounts/${id}`);
  }

  deleteListReader(id: number[]): Observable<any> {
    return this.http.post<any>(API_URL + '/deleteList', id);
  }
}
