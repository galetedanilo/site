export class ValidatorMessagesHelper {
  private static messages = {
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

  static getValidatorErrorMessages() {
    return ValidatorMessagesHelper.messages;
  }
}
