import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, distinctUntilChanged, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseProxyService {
  constructor(private http: HttpClient) {}
  get<T>(apiUrl: string, filters?: Object): Observable<T> {
    return this.http
      .get<T>(apiUrl + this.queryParams(filters))
      .pipe(shareReplay(), retry(1)) as Observable<T>;
  }
  queryParams(filters: Object | undefined): string {
    if (filters) {
      let params = '?';
      for (let [key, value] of Object.entries(filters)) {
        params += `${key}=${value}&`;
      }
      return params.slice(0, params.length - 1);
    } else {
      return '';
    }
  }
}
