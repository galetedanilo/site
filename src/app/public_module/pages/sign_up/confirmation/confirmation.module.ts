import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
    MatProgressSpinnerModule,
    TranslocoModule,
  ],
  providers: [
    {
      provide: ConfirmationService,
      useClass: ConfirmationServiceImpl,
    },
    {
      provide: TRANSLOCO_SCOPE,
      useValue: { scope: 'public/sign_up/confirmation', alias: 'confirmation' },
    },
  ],
})
export class ConfirmationModule {}
