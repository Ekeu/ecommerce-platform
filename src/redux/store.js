import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'; // Allows our browser to cache our entire store

import rootReducer from './root-reducer';

/**
 * Remember redux-thunk is a piece of middleware that allows us to fire functions
 */

const middlewares = [logger, thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
