import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcherHelper } from '@app/public_module/shared/helpers/error-state-match.helper';
import { passwordMatchValidator } from '@app/public_module/shared/validators/password-match.validator';

@Component({
  selector: 'app-account-register-form',
  templateUrl: './account-register-form.component.html',
  styleUrls: ['./account-register-form.component.scss'],
})
export class AccountRegisterFormComponent {
  match = new ErrorStateMatcherHelper();
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  accountRegisterForm: FormGroup = new FormGroup({
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

  validator_error_messages = {
    name: [
      { type: 'required', message: 'registration.name_is_required' },
      {
        type: 'minlength',
        message: 'registration.name_must_be_at_least_5_characters_long',
      },
      {
        type: 'maxlength',
        message: 'registration.name_cannot_be_more_than_40_characters_long',
      },
      {
        type: 'pattern',
        message: 'registration.your_name_must_contain_only_letters',
      },
    ],
    email: [
      { type: 'required', message: 'registration.email_is_required' },
      {
        type: 'minlength',
        message: 'registration.email_must_be_at_least_5_characters_long',
      },
      {
        type: 'maxlength',
        message: 'registration.email_cannot_be_more_than_40_characters_long',
      },
      {
        type: 'email',
        message: 'registration.enter_a_valid_email',
      },
    ],
    confirm_password: [
      { type: 'match', message: 'registration.password_mismatch' },
    ],
    password: [
      { type: 'required', message: 'registration.password_is_required' },
      {
        type: 'minlength',
        message: 'registration.password_must_be_at_least_5_characters_long',
      },
      {
        type: 'maxlength',
        message: 'registration.password_cannot_be_more_than_15_characters_long',
      },
      {
        type: 'pattern',
        message:
          'registration.your_password_must_contain_at_least_one_uppercase_one_lowercase_and_one_number',
      },
    ],
  };

  onSubmit() {
    console.log(this.accountRegisterForm);
  }
}
