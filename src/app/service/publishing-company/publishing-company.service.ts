import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {PublishingCompany} from '../../model/publishing-company';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class PublishingCompanyService {
  constructor(private http: HttpClient) {
  }

  getAllPublishingCompany(): Observable<PublishingCompany[]> {
    return this.http.get<PublishingCompany[]>(API_URL + '/publishing-companies');
  }

  createPublishingCompany(publishingCompany: PublishingCompany): Observable<PublishingCompany> {
    return this.http.post<PublishingCompany>(API_URL + '/publishing-companies', publishingCompany);
  }

  getPublishingCompany(id: number): Observable<PublishingCompany> {
    return this.http.get<PublishingCompany>(API_URL + `/publishing-companies/${id}`);
  }

  updatePublishingCompany(id: number, publishingCompany: PublishingCompany): Observable<PublishingCompany> {
    return this.http.put<PublishingCompany>(API_URL + `/publishing-companies/${id}`, publishingCompany);
  }

  deletePublishingCompany(id: number): Observable<PublishingCompany> {
    return this.http.delete<PublishingCompany>(API_URL + `/publishing-companies/${id}`);
  }

  deleteListPublishingCompany(id: number[]): Observable<PublishingCompany> {
    return this.http.post<PublishingCompany>(API_URL + '/publishing-companies/deleteList', id);
  }
}
