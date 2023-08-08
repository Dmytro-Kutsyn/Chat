import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import authSaga from './auth/sagas';

export default function* rootSaga(): SagaIterator {
  yield all([
    fork(authSaga),
  ]);
}
