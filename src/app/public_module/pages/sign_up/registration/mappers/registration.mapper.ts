import { RegistrationInputValues } from '../components/registration_form/interfaces/registration-input-values.interface';
import { RegistrationRequest } from '../interfaces/registration.interface';

export class RegistrationMapper {
  public static mapperRegistrationFormValuesToRegistrationRequest(formValues: RegistrationInputValues) {
    const mapper: RegistrationRequest = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.passwordMatch.password,
    };

    return mapper;
  }
}
