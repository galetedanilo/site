import { HttpClient } from '@angular/common/http';
import { Injectable, SkipSelf } from '@angular/core';
import { PublicHttpService } from '@app/core/services/public-http.service';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class PublicHttpServiceImpl implements PublicHttpService {
  private apiUrl: string = environment.apiUrl;
  private apiVersion: string = environment.apiVersion;

  constructor(@SkipSelf() private httpClient: HttpClient) {}

  get<T>(resource: string): Observable<T> {
    return this.httpClient.get<T>(this.apiUrl.concat(this.apiVersion, resource));
  }

  post<T, R>(resource: string, body: T): Observable<R> {
    return this.httpClient.post<R>(this.apiUrl.concat(this.apiVersion, resource), body);
  }
}
