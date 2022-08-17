import { Observable } from "rxjs";

export abstract class RegistrationService {
  abstract registerUser(data: any): Observable<any>;
}