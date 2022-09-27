import { Injectable } from '@angular/core';
import { PublicHttpService } from '@app/core/services/public-http.service';
import { Observable } from 'rxjs';

import { ConfirmationService } from '../../shared/services/confirmation.service';
import { ConfirmationRequest, ConfirmationResponse } from '../interfaces/confirmation.interface';

@Injectable()
export class ConfirmationServiceImpl implements ConfirmationService {
  private resource: string = '/confirmationAccount';

  constructor(private httpClient: PublicHttpService) {}

  confirmationNewAccount(
    data: ConfirmationRequest
  ): Observable<ConfirmationResponse> {
    return this.httpClient.post<ConfirmationRequest, ConfirmationResponse>(
      this.resource,
      data
    );
  }
}
