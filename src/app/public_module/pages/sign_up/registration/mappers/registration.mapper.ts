import { User } from '../../shared/interfaces/user.interface';
import { RegistrationInputValues } from '../components/registration_form/interfaces/registration-input-values.interface';
import { RegistrationRequest, RegistrationResponse } from '../interfaces/registration.interface';

export class RegistrationMapper {
  public static mapperRegistrationInputValuesToRegistrationRequest(
    formValue: RegistrationInputValues
  ) {
    const mapper: RegistrationRequest = {
      name: formValue.name,
      email: formValue.email,
      password: formValue.passwordMatch.password,
    };

    return mapper;
  }

  public static mapperRegistrationResponseToUser(
    response: RegistrationResponse
  ): User {
    const mapper: User = {
      name: response.name,
      email: response.email,
    };

    return mapper;
  }
}
