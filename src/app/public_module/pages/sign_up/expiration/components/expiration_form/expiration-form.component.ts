import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ExpirationResponse } from '../../interfaces/expiration.interface';
import { ExpirationService } from '../../services/expiration.service';
import { ValidatorMessagesHelper } from './helpers/validator-messages.helper';

@Component({
  selector: 'app-expiration-form',
  templateUrl: './expiration-form.component.html',
  styleUrls: ['./expiration-form.component.scss'],
})
export class ExpirationFormComponent implements OnDestroy{
  validatorMessages = ValidatorMessagesHelper.getValidatorErrorMessages();

  expirationForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(5),
      Validators.maxLength(40),
    ]),
  });

  private destroy$: Subject<Boolean> = new Subject();

  constructor(private expirationService: ExpirationService) {}

  onSubmit(): void {
    this.expirationService
      .resendActivationToken(this.expirationForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: ExpirationResponse) => {},
        error: (error: HttpErrorResponse) => {}
      });
  }

  ngOnDestroy(): void {
      this.destroy$.next(true)
      this.destroy$.unsubscribe();
  }
}
