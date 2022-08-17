import { Observable } from "rxjs";

export abstract class PublicHttpService {
  abstract get<T>(resource: string): Observable<T>;

  abstract post<T, R>(resource: string, body: T): Observable<R>;
}