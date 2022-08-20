import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordMatchValidator(group: AbstractControl): ValidationErrors | null  { 
  let pass = group.get('password')?.value;
  let confirmPass = group.get('confirm_password')?.value

  return pass !== confirmPass ? { match: true } : null
}
