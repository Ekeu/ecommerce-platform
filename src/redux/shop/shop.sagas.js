/**
 * SAGA Code related to shop
 */

/**
 * Effects ==> Allows us to do different things with either the store
 * by creating actions or listening for actions
 *
 * takeEvery ==> Listens for every actions of a specific type that
 * we pass to it.
 *
 * takeEvery ==> Creates a non blocking call in other to not stop our application to
 * continue running other sagas or whatever the user wants to do
 */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';
/**
 * Action types ==> To listen to specific action types
 */
import ShopActionTypes from './shop.types';

/**
 * The whole purpose of the sagas middleware is to run all theses sagas
 * concurrently. Meaning it want to run them all togetether without blocking
 * execution
 */
export function* fetchCollectionsAsync() {
  /**
   * We are also able to cancel thes tasks that are coming out of our function
   */
  yield console.log('I am fired'); // What want to yield control of this sagas back to the library

  const collectionRef = firestore.collection('collections');
  try {
    /**
     * generator function similar to async/await in the sense that
     * when we set this new snapshot value eq to the  yielded value (by running collectionRef.get()).
     * When this value comes back, it comes back in a promise form that gets
     * resolved with a value of our collection reference which is our snapshot
     *
     * So instead of chaining .then() and getting the snapshot in the cb that we pass
     * to our .then() just like with async/await we get it back at the constant value
     * that we set on the left hand side of our yield.
     *
     * The value goes into yield which then sets it in the constant value
     */

    const snapshot = yield collectionRef.get();
    /**
     * call ==> Call is the code/effect inside our generator function that invokes the method
     *
     * call takes in as fires parameter the function to call and the susequent parameters are the
     * arguments of the function to be called.
     *
     * We can clearly do this convertCollectionsSnapshotToMap(snapshot) with no problem,
     * but we want to yield that function call incase it takes more time than we expected.
     *
     * Because we are yielding the call function it allows us to defer control at this current point
     * of execution back to the saga middleware. So in case it needs to cancel we are giving it another place to
     * do so.
     */
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    /**
     * put ==> It is the effect for creating action like dispatch. The only difference is that we have to
     * yield it and then just use it like the dispatch.
     */
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  /**
   * It's going to pause when ever a specific action type that we want comes
   * in.
   *
   * The second param is another generator function that we run in response to
   * the takeEvery Listener. Another generator to do the expected thing we are waiting for
   */
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}
