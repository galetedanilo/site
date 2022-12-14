import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, SkipSelf } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Reloadable } from '@app/core/interfaces/reloadable.interface';
import { Subject, takeUntil } from 'rxjs';

import { RegistrationService } from '../shared/services/registration.service';
import { RegistrationInputValues } from './components/registration_form/interfaces/registration-input-values.interface';
import { RegistrationRequest, RegistrationResponse } from './interfaces/registration.interface';
import { RegistrationMapper } from './mappers/registration.mapper';
import { RegistrationError } from './enums/registration-error.enum';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnDestroy, Reloadable {
  isNewRegister: boolean = true;
  isLoading: boolean = false;

  userName!: string;

  private destroy$: Subject<boolean> = new Subject();

  constructor(
    @SkipSelf()
    private registrationService: RegistrationService,
    @SkipSelf() private matSnackBar: MatSnackBar
  ) {}

  onSubmit(formValue: RegistrationInputValues): void {
    this.isLoading = true;

    const request: RegistrationRequest =
      RegistrationMapper.mapperRegistrationFormValuesToRegistrationRequest(
        formValue
      );

    this.registrationService
      .registerNewAccount(request)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: RegistrationResponse) => {
          this.userName = data.name;
          this.isNewRegister = false;
          this.isLoading = false;
        },
        error: (httpErrorResponse: HttpErrorResponse) => {
          this.isLoading = false;

          const errorCode = httpErrorResponse.error.code;
          
          switch (errorCode) {
            case RegistrationError.EMAIL_ALREADY_EXISTS:
              this.matSnackBar.open(httpErrorResponse.error.messages, 'Close', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 2500,
              });
              break;
          }
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
