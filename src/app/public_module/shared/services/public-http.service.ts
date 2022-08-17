import { Injectable, SkipSelf } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { environment } from "@env/environment";
import { PublicHttpService } from "@app/core/services/public-http.service";

@Injectable()
export class PublicHttpServiceImpl implements PublicHttpService {
  constructor(@SkipSelf() private httpClient: HttpClient) {}

  private apiUrl: string = environment.apiUrl

  get<T>(resource: string): Observable<T> {
    return this.httpClient.get<T>(this.apiUrl.concat(resource));
  }

  post<T, R>(resource: string, body: T): Observable<R> {
    return this.httpClient.post<R>(this.apiUrl.concat(resource), body);
  }

}