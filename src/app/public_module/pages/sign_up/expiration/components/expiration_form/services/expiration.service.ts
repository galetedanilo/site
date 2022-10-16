import { Injectable } from '@angular/core';
import { PublicHttpService } from '@app/core/services/public-http.service';
import { Observable } from 'rxjs';

import {
  ExpirationRequest,
  ExpirationResponse,
} from '../../../interfaces/expiration.interface';
import { ExpirationService } from '../../../services/expiration.service';

@Injectable()
export class ExpirationServiceImpl implements ExpirationService {
  private resource: string = '/expiration-token/resend-token';

  constructor(private _httpClient: PublicHttpService) {}

  resendActivationToken(
    data: ExpirationRequest
  ): Observable<ExpirationResponse> {
    return this._httpClient.post<ExpirationRequest, ExpirationResponse>(
      this.resource,
      data
    );
  }
}
