import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(private http: HttpClient) {
  }

  getAllAuthor(): Observable<any[]> {
    return this.http.get<any[]>(API_URL + '/authors');
  }

  createAuthor(author: any): Observable<any> {
    return this.http.post<any>(API_URL + '/authors', author);
  }

  getAuthor(id: number): Observable<any> {
    return this.http.get<any>(API_URL + `/authors/${id}`);
  }

  updateAuthor(id: number, author: any): Observable<any> {
    return this.http.put<any>(API_URL + `/authors/${id}`, author);
  }

  deleteAuthor(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + `/authors/${id}`);
  }

  deleteListAuthor(id: number[]): Observable<any> {
    return this.http.post<any>(API_URL + '/authors/deleteList', id);
  }
}
