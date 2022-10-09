import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorMessagesHelper } from './helpers/validator-messages.helper';

@Component({
  selector: 'app-expiration-form',
  templateUrl: './expiration-form.component.html',
  styleUrls: ['./expiration-form.component.scss'],
})
export class ExpirationFormComponent {
  validatorMessages = ValidatorMessagesHelper.getValidatorErrorMessages();
  
  expirationForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(5),
      Validators.maxLength(40),
    ]),
  });

  onSubmit(): void {
    
  }
}
