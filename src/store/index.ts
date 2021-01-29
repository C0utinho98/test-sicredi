import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { IDragonState } from './dragons/reducer/types';
import reducers from './rootReducer';
import sagas from './rootSaga';

import { IAuthState } from './auth/reducer/types';
import { IToastState } from './toast/reducer/types';

export interface IState {
  auth: IAuthState;
  toast: IToastState;
  dragon: IDragonState;
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  persistReducer(
    {
      key: 'app-react',
      storage,
      whitelist: ['auth'],
    },
    reducers,
  ),
  composeWithDevTools(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
