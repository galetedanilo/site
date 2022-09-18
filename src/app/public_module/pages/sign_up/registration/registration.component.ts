import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';

import { RegistrationService } from '../shared/services/registration.service';
import { RegistrationInputValues } from './components/registration_form/interfaces/registration-input-values.interface';
import { RegistrationRequest, RegistrationResponse } from './interfaces/registration.interface';
import { RegistrationMapper } from './mappers/registration.mapper';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnDestroy {
  isNewRegister: boolean = true;
  isLoading: boolean = false;

  userName!: string;

  private destroy$ = new Subject();

  constructor(private registrationService: RegistrationService, private matSnackBar: MatSnackBar) {}

  onSubmit(formValue: RegistrationInputValues): void {
    this.isLoading = true;

    const request: RegistrationRequest =
      RegistrationMapper.mapperRegistrationFormValuesToRegistrationRequest(formValue);

    this.registrationService
      .registerNewAccount(request)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: RegistrationResponse) => {
          this.userName = data.name;
          this.isNewRegister = false;
          this.isLoading = false;
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading = false;
          this.matSnackBar.open(error.message, 'Close', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 2500,
          });
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
