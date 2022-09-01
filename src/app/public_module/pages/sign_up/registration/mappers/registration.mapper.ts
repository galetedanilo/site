import { RegistrationInputValues } from '../components/registration_form/interfaces/registration-input-values.interface';
import { RegistrationRequest } from '../interfaces/registration.interface';

export class RegistrationMapper {
  public static mapperRegistrationInputValuesToRegistrationRequest(formValue: RegistrationInputValues) {
    const mapper: RegistrationRequest = {
      name: formValue.name,
      email: formValue.email,
      password: formValue.passwordMatch.password,
    };

    return mapper;
  }
}
