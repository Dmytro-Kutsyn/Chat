import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = reduxCreateStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);

  return { store };
};

export const { store } = createStore();

export type TAppDispatch = typeof store.dispatch;
