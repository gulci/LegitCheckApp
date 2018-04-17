import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

// reducers
import rootReducer from '../reducers/rootReducer';

// sagas
import rootSaga from '../sagas/rootSaga';

// Middlewares
const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

// Persist the store
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, applyMiddleware(...middleWares));
  const persistor = persistStore(
    store,
    null,
  );
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept(() => {
      // This fetch the new state of the above reducers.
      const nextRootReducer = rootReducer;
      store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
    });
  }

  return { store, persistor };
};
