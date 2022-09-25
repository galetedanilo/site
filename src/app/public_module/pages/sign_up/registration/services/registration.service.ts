import { Injectable } from '@angular/core';
import { PublicHttpService } from '@app/core/services/public-http.service';
import { Observable } from 'rxjs';

import { RegistrationService } from '../../shared/services/registration.service';
import { RegistrationRequest, RegistrationResponse } from '../interfaces/registration.interface';

@Injectable()
export class RegistrationServiceImpl implements RegistrationService {
  private resource: string = '/registration';

  constructor(private httpClient: PublicHttpService) {}

  registerNewAccount(
    data: RegistrationRequest
  ): Observable<RegistrationResponse> {
    return this.httpClient.post<RegistrationRequest, RegistrationResponse>(
      this.resource,
      data
    );
  }
}
