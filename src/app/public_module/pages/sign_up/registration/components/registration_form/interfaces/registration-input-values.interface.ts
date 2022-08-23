export interface RegistrationInputValues {
  name: string;
  email: string;
  passwordMatch: {
    password: string;
    confirm_password: String;
  };
  terms: boolean;
}
