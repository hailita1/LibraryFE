import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(API_URL + '/documents');
  }

  create(Topic: any): Observable<any> {
    return this.http.post<any>(API_URL + '/documents', Topic);
  }

  get(id: number): Observable<any> {
    return this.http.get<any>(API_URL + `/documents/${id}`);
  }

  update(id: number, Topic: any): Observable<any> {
    return this.http.put<any>(API_URL + `/documents/${id}`, Topic);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + `/documents/${id}`);
  }

  deleteList(id: number[]): Observable<any> {
    return this.http.post<any>(API_URL + '/documents/deleteList', id);
  }
}
