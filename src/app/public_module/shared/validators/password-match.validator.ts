import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordMatchValidator(group: AbstractControl): ValidationErrors | null  { 
  let password = group.get('password')?.value;
  let confirmPassword = group.get('confirm_password')?.value

  return password !== confirmPassword ? { match: true } : null
}
