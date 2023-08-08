import { AuthState } from './types';

export const AuthSelector = (state: any): AuthState  => state.authReducers;
