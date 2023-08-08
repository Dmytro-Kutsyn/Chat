import createReducer from '../../utils/createReducer';
import {
  AuthActions,
  AuthState,
  LoginRequestSuccess,
  RegisterFailure,
  RegisterRequest,
  RegisterSuccess
} from './types';

const initialState: any = {
  isLoading: false,
  isLoaded: false,
  currentUserData: null,
  error: false,
  regisrationSuccess: false,
  errorType: '',
  emailConfirmationError: false,
  message: '',
  tokenData: null,
  modalVisible: false,
  role: null
};

const authReducers = createReducer({}, {
  REGISTER: (state: AuthState, action: RegisterRequest) => ({
    ...state,
    isLoading: true,
  }),
  REGISTER_SUCCESS: (state: AuthState, action: RegisterSuccess) => ({
    ...state,
    isLoading: false,
    regisrationSuccess: true
  }),
  LOGIN: (state: AuthState) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    error: false
  }),
  LOGIN_SUCCESS: (state: AuthState, action: LoginRequestSuccess) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    currentUserData: action.payload
  }),
  EDIT_PROFILE: (state: AuthState) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    error: false
  }),
  EDIT_PROFILE_SUCCESS: (state: AuthState, action: any) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    currentUserData: action.payload
  }),
  CURRENT_USER: (state: AuthState) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
  }),
  CURRENT_USER_SUCCESS: (state: AuthState, action: any) => ({
    ...state,
    isLoading: false,
    isLoaded: true,
    currentUserData: action.payload
  }),
  LOG_OUT: (state: AuthState) => ({ ...state, isLoading: true }),
  LOG_OUT_SUCCESS: (state: AuthState) => ({
    ...state,
    isLoading: false,
    currentUserData: null
  })
});

export default (state = initialState, action: AuthActions): any => (authReducers(state, action));
