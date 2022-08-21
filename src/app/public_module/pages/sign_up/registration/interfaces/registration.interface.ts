import { User } from "../../shared/interfaces/user.interface"

export interface RegistrationRequest extends User {
  password: string
}

export interface RegistrationResponse  extends User {
  id: string
}