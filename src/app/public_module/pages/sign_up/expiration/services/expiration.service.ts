import { Observable } from 'rxjs';

export abstract class ExpirationService {
  abstract resendActivationToken(data: any): Observable<any>;
}
