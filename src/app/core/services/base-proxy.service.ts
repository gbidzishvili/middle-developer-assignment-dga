import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseProxyService {
  constructor(private http: HttpClient) {}
  get<T>(apiUrl: string, filters?: Object): Observable<T> {
    return this.http
      .get<T>(apiUrl + this.queryParams(filters))
      .pipe<T>(retry(1)) as Observable<T>;
  }
  queryParams(filters: Object | undefined): string {
    if (filters) {
      let params = '?';
      for (let key in filters) {
        let filtersValue = filters[key as keyof typeof filters];
        if (Array.isArray(filtersValue)) {
          for (let index = 0; index < filtersValue.length; index++) {
            params += `${key}=${filtersValue[index]}&`;
          }
        } else {
          for (const [key, value] of Object.entries(filtersValue)) {
            params += `${key}=${value}&`;
          }
        }
      }
      return params.slice(0, params.length - 1);
    } else {
      return '';
    }
  }
}
