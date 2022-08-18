import { Observable } from "rxjs";

export abstract class RegistrationService {
  abstract registerNewAccount(data: any): Observable<any>;
}