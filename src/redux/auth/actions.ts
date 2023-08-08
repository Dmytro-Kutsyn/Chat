import {
  IUser,
  LoginRequest,
  LoginRequestSuccess,
  LogoutRequest,
  LogoutSuccess,
  RegisterRequest,
  RegisterSuccess,
  SuccessfullAuthResponse,
  RegisterFailure
} from './types';

export enum AuthTypes {
  REGISTER = 'REGISTER',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOG_OUT='LOG_OUT',
  LOG_OUT_SUCCESS='LOG_OUT_SUCCESS',
  REGISTER_FAILURE='REGISTER_FAILURE',
  CURRENT_USER='CURRENT_USER',
  CURRENT_USER_SUCCESS='CURRENT_USER_SUCCESS',
  EDIT_PROFILE='EDIT_PROFILE',
  EDIT_PROFILE_SUCCESS='EDIT_PROFILE_SUCCESS'
}

export const registerRequest = (payload: any): RegisterRequest => ({
  type: AuthTypes.REGISTER,
  payload
});

export const registerSuccess = (payload: IUser): RegisterSuccess => ({
  type: AuthTypes.REGISTER_SUCCESS,
  payload
});

export const registerFailure = (): RegisterFailure => ({
  type: AuthTypes.REGISTER_FAILURE,
});

export const loginRequest = (payload: any): LoginRequest => ({
  type: AuthTypes.LOGIN,
  payload
});

export const loginRequestSuccess = (payload: SuccessfullAuthResponse): LoginRequestSuccess => ({
  type: AuthTypes.LOGIN_SUCCESS,
  payload
});
export const currentUserRequest = (): any => ({
  type: AuthTypes.CURRENT_USER
});

export const currentUserRequestSuccess = (payload: any): any => ({
  type: AuthTypes.CURRENT_USER_SUCCESS,
  payload
});

export const logoutRequest = (): LogoutRequest => ({
  type: AuthTypes.LOG_OUT,
});

export const logoutSuccess = (): LogoutSuccess => ({
  type: AuthTypes.LOG_OUT_SUCCESS,
});

export const editProfileRequest = (payload: any): any => ({
  type: AuthTypes.EDIT_PROFILE,
  payload
});

export const editProfileSuccess = (payload: any): any => ({
  type: AuthTypes.EDIT_PROFILE_SUCCESS,
  payload
});
