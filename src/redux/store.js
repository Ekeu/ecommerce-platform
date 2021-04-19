import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist'; // Allows our browser to cache our entire store

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

/**
 * Remember redux-thunk is a piece of middleware that allows us to fire functions
 */
/**
 * Replacing thunk with saga to handle async actions in redux
 */
const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
