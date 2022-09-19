import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerOverlayModule } from '@app/shared/components/spinner_overlay/spinner-overlay.module';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

import { ExpirationRouterModule } from './expiration-routin.module';
import { ExpirationComponent } from './expiration.component';

@NgModule({
  declarations: [ExpirationComponent],
  imports: [
    CommonModule,
    ExpirationRouterModule,
    TranslocoModule,
    SpinnerOverlayModule,
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'public/sign_up/expiration',
        alias: 'expiration',
      },
    },
  ],
})
export class ExpirationModule {}
