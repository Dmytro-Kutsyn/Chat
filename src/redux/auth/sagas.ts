import { takeLatest, all, put, call, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { message } from 'antd';
import Cookies from 'js-cookie';

import { AuthAPI } from '../../services/AuthAPI';
import { RoutesPaths } from '../../constants/navigation';
import {
  AuthTypes,
  registerFailure,
  registerSuccess,
  loginRequestSuccess,
  currentUserRequestSuccess
} from './actions';
import { IResponseGenerator } from '../../types/index';

type Error = {
  msg: string;
};

function* registerSaga(action: any) {
  try {
    const response: IResponseGenerator = yield call(AuthAPI.register, action.payload.data);

    yield put(registerSuccess(response.data.data));
    yield message.success(response.data.message);
    yield action.payload.history.push(RoutesPaths.LOGIN);
  } catch (data: any) {
    if (typeof data?.data.message === 'string') {
      message.error(data?.data.message)
    }

    yield put(registerFailure())
    const errorMessage = data?.data?.errors?.errors

    if (errorMessage && errorMessage.length) errorMessage.forEach((error: Error) => {
      return message.error(error.msg);
    })
  }
}

function* loginSaga(action: any) {
  try {
    const response: IResponseGenerator = yield call(AuthAPI.login, action.payload.data);

    yield put(loginRequestSuccess(response.data.userData))
    Cookies.remove('userToken')
    Cookies.set('userToken', response.data.token)
    yield action.payload.history.push(RoutesPaths.MY_PROFILE);
  } catch (data: any) {
    if (typeof data?.data.message === 'string') {
      message.error(data?.data.message)
    }
  }
}

function* currentUserSaga() {
  try {    
    const response: IResponseGenerator = yield call(AuthAPI.currentUser);

    yield put(currentUserRequestSuccess(response.data.data));
  } catch (data: any) {
    if (typeof data?.data.message === 'string') {
      message.error(data?.data.message)
    }
  }
}

function* editProfileSaga(action: any) {
  try {
    const response: IResponseGenerator = yield call(AuthAPI.editProfile, action.payload);

    yield put(currentUserRequestSuccess(response.data.data));
  } catch (data: any) {
    if (typeof data?.data.message === 'string') {
      message.error(data?.data.message)
    }
  }
}

function* authSaga(): SagaIterator {
  yield all([
    takeLatest(AuthTypes.REGISTER, registerSaga),
    takeLatest(AuthTypes.LOGIN, loginSaga),
    takeLatest(AuthTypes.CURRENT_USER, currentUserSaga),
    takeLatest(AuthTypes.EDIT_PROFILE, editProfileSaga)
  ]);
}

export default authSaga;
