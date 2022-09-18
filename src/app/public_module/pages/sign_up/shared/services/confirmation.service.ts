import { Observable } from "rxjs";

export abstract class ConfirmationService {
  abstract confirmationNewAccount(data: any): Observable<any>;
}