import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //Getting the actual localStorage object

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer'

//Persist Config
/**
 * key ==> At what point inside our reducer object do we want to start storing
 * storage ==> the storage depends on what you choose (localStorage, sessionStorage...)
 * whitelist ==> Array containing the string names of any reducer we want to store
 */
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

//Modified version of our root reducer with persistence capabilities
export default persistReducer(persistConfig, rootReducer);
