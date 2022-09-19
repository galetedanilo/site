import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SpinnerOverlayModule } from '@app/shared/components/spinner_overlay/spinner-overlay.module';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { ConfirmationService } from '../shared/services/confirmation.service';
import { ConfirmationRoutingModule } from './confirmation-routing.module';
import { ConfirmationComponent } from './confirmation.component';
import { ConfirmationServiceImpl } from './services/confirmation.service';

@NgModule({
  declarations: [ConfirmationComponent],
  imports: [
    CommonModule,
    ConfirmationRoutingModule,
    MatSnackBarModule,
    TranslocoModule,
    SpinnerOverlayModule,
  ],
  providers: [
    {
      provide: ConfirmationService,
      useClass: ConfirmationServiceImpl,
    },
    {
      provide: TRANSLOCO_SCOPE,
      useValue: { scope: 'public/sign_up/confirmation', alias: 'confirmation'}
    }
  ],
})
export class ConfirmationModule {}
