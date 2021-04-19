/**
 * This root-saga file is created because inside of our sagaMideleware.run()
 * function in our store.js, if we wanted to run multiple sagas or have our
 * saga middleware listening for multiple sagas, we have to call the .run()
 * function individually on every saga that we want to be aware of.
 *
 * So instead what we are going to do is we will run all of then at once,
 * once the application starts up in one large saga.
 */
import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';
import { shopSagas } from './shop/shop.sagas';

export default function* rootSaga() {
  /**
   * all allows use to initialize all our sagas individually on seperate task streams at the same time
   */
  yield all([
    call(fetchCollectionsStart),
    call(userSagas),
    call(cartSagas),
    call(shopSagas),
  ]);
}
