import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SpinnerOverlayModule } from '@app/shared/components/spinner_overlay/spinner-overlay.module';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

import { ExpirationFormComponent } from './components/expiration_form/expiration-form.component';
import { ExpirationRoutingModule } from './expiration-routing.module';
import { ExpirationComponent } from './expiration.component';

@NgModule({
  declarations: [ExpirationComponent, ExpirationFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ExpirationRoutingModule,
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
