import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SpinnerOverlayModule } from '@app/shared/components/spinner_overlay/spinner-overlay.module';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

import { RegistrationService } from '../shared/services/registration.service';
import { RegistrationFormComponent } from './components/registration_form/registration-form.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { RegistrationServiceImpl } from './services/registration.service';

@NgModule({
  declarations: [
    RegistrationComponent,
    RegistrationFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    RegistrationRoutingModule,
    TranslocoModule,
    SpinnerOverlayModule,
  ],
  providers: [
    {
      provide: RegistrationService,
      useClass: RegistrationServiceImpl,
    },
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'public/sign_up/registration',
        alias: 'registration',
      },
    },
  ],
})
export class RegistrationModule {}
