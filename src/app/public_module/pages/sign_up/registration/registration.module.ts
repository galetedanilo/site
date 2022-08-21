import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

import { RegistrationService } from '../shared/services/registration.service';
import { RegistrationFormComponent } from './components/registration_form/registration-form.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { RegistrationServiceImpl } from './services/registration.service';

@NgModule({
  declarations: [RegistrationComponent, RegistrationFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    RegistrationRoutingModule,
    TranslocoModule,
  ],
  providers: [
    { provide: RegistrationService, useClass: RegistrationServiceImpl },
    { provide: TRANSLOCO_SCOPE, useValue: 'registration' },
  ],
})
export class RegistrationModule {}
