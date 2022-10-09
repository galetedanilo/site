export class ValidatorMessagesHelper {
  private static messages = {
    email: [
      { type: 'required', message: 'expiration.email_is_required' },
      {
        type: 'minlength',
        message: 'expiration.email_must_be_at_least_5_characters_long',
      },
      {
        type: 'maxlength',
        message: 'expiration.email_cannot_be_more_than_40_characters_long',
      },
      {
        type: 'email',
        message: 'expiration.enter_a_valid_email',
      },
    ],
  }

  static getValidatorErrorMessages() {
    return ValidatorMessagesHelper.messages;
  }
}