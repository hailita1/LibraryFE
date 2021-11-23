import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) {
  }

  getAllTopic(): Observable<any[]> {
    return this.http.get<any[]>(API_URL + '/topics');
  }

  getAllTopicStatusTrue(): Observable<any[]> {
    return this.http.get<any[]>(API_URL + '/topics/statusTrue');
  }

  createTopic(Topic: any): Observable<any> {
    return this.http.post<any>(API_URL + '/topics', Topic);
  }

  getTopic(id: number): Observable<any> {
    return this.http.get<any>(API_URL + `/topics/${id}`);
  }

  updateTopic(id: number, Topic: any): Observable<any> {
    return this.http.put<any>(API_URL + `/topics/${id}`, Topic);
  }

  deleteTopic(id: number): Observable<any> {
    return this.http.delete<any>(API_URL + `/topics/${id}`);
  }

  // getHouseByTopic(id: number): Observable<House[]> {
  //   return this.http.get<House[]>(API_URL + `/topics/${id}/houses`);
  // }

  deleteListTopic(id: number[]): Observable<any> {
    return this.http.post<any>(API_URL + '/topics/deleteList', id);
  }
}
