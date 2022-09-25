import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcherHelper } from '@app/public_module/shared/helpers/error-state-match.helper';
import { passwordMatchValidator } from '@app/public_module/shared/validators/password-match.validator';

import { ValidatorMessagesHelper } from './helpers/validator-messages.helper';
import { RegistrationInputValues } from './interfaces/registration-input-values.interface';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  @Output() formSubmitEvent: EventEmitter<RegistrationInputValues> =
    new EventEmitter();

  match = new ErrorStateMatcherHelper();
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  validatorMessages = ValidatorMessagesHelper.getValidatorErrorMessages();

  registrationForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(40),
      Validators.pattern('^([^0-9]*)$'),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(40),
      Validators.email,
    ]),
    terms: new FormControl('', Validators.requiredTrue),
    passwordMatch: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ]),
        confirm_password: new FormControl(''),
      },
      { validators: [passwordMatchValidator] }
    ),
  });

  onSubmit() {
    this.formSubmitEvent.emit(this.registrationForm.value);
  }
}
