import ShopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

/* export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
}); */

/**
 * Redux-Thunk Actions
 *
 * All thunks are is a action creator that returns a function
 * that get's the dispatch (Similar to mapDispatchToProps)
 *
 * So instead of writing an action (the above updateCollections) that returns
 * an action (action object), we are going to write a function that returns a
 * function that get's dispatch in it so that whenever dispatch is called it will
 * fire multiple actions
 */

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});
export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});
export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

/**
 * Note ==> If redux-thunk middleware is enabled, any time you attempt to dispatch
 * a function instead of an object, the middleware will call that function with 
 * dispatch method itself as the first argument
 * 
 */
//fetchCollectionsStartAsync ==> It's an async action creator
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart())

    collectionRef
    .get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap))
    })
    .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
