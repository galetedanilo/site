import { User } from "../../shared/interfaces/user.interface"

export interface RegistrationRequest extends User {
  user_password: string
}

export interface RegistrationResponse  extends User {
  id: string
}