import { AuthTypes } from './actions';

export interface IUser {
  id?: any,
  firstName?: any,
  lastName?: any,
  photoUrl?: any,
  email?: any,
  phone?: any,
  address?: any,
  state?: any,
}

export interface SuccessfullAuthResponse {
  token: string,
  otp: boolean
}

export interface LoginProps {
  username: string,
  password: string
}

export interface RegisterRequest {
  type: typeof AuthTypes.REGISTER
  payload: IUser
}

export interface RegisterSuccess {
  type: typeof AuthTypes.REGISTER_SUCCESS,
  payload: IUser
}

export interface RegisterFailure {
  type: typeof AuthTypes.REGISTER_FAILURE,
}

export interface LoginRequest {
  type: typeof AuthTypes.LOGIN,
  payload: LoginProps
}

export interface LoginRequestSuccess {
  type: typeof AuthTypes.LOGIN_SUCCESS,
  payload: SuccessfullAuthResponse
}

export interface LogoutRequest {
  type: typeof AuthTypes.LOG_OUT,
}

export interface LogoutSuccess {
  type: typeof AuthTypes.LOG_OUT_SUCCESS,
}


export interface AuthState {
  isLoading: boolean,
  error: boolean,
  regisrationSuccess: boolean
  phoneNumber: any
}


export type AuthActions =
  | RegisterRequest
  | RegisterSuccess
  | LoginRequest
  | LoginRequestSuccess
  | LogoutRequest
  | LogoutSuccess
