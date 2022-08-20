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
      Validators.maxLength(30),
      Validators.pattern('^([^0-9]*)$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    passwordMatch:  new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      ]),
      confirm_password: new FormControl(''),
    }, {validators: [passwordMatchValidator]})
  });

  validator_error_messages = {
    name: [
      { type: 'required', message: 'Name is required' },
      {
        type: 'minlength',
        message: 'Name must be at least 5 characters long',
      },
      {
        type: 'maxlength',
        message: 'Name cannot be more than 25 characters long',
      },
      {
        type: 'pattern',
        message: 'Your name must contain only numbers and letters',
      },
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' },
      {
        type: 'validUsername',
        message: 'Your username has already been taken',
      },
    ],
    confirm_password: [
      { type: 'match', message: 'Password mismatch' },
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      {
        type: 'minlength',
        message: 'Password must be at least 5 characters long',
      },
      {
        type: 'maxlength',
        message: 'Password cannot be more than 15 characters long',
      },
      {
        type: 'pattern',
        message:
          'Your password must contain at least one uppercase, one lowercase, and one number',
      },
    ],
    terms: [
      { type: 'pattern', message: 'You must accept terms and conditions' },
    ],
  };

  onSubmit() {
    console.log(this.accountRegisterForm)
  }
}

