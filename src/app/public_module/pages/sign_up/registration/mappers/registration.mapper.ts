import { User } from '../../shared/interfaces/user.interface';
import {
  RegistrationRequest,
  RegistrationResponse,
} from '../interfaces/registration.interface';

export class RegistrationMapper {
  public static mapperFormValueToRegistrationRequest(formValue: any) {
    const mapper: RegistrationRequest = {
      name: formValue.name,
      email: formValue.email,
      password: formValue.password,
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
