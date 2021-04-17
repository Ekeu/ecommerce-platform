/**
 * This is used or was used because we handled all the async activity
 * in the shop component using the .get() or directly using firebase onSnapShot()
 */
/* const ShopActionTypes = {
    UPDATE_COLLECTIONS:'UPDATE_COLLECTIONS'
} */

/**
 * Using Redux-Thunk we are now going to set multiple states that our shop actions
 * could be in as far as fetching the async data goes
 */

const ShopActionTypes = {
  FETCH_COLLECTIONS_START: 'FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_SUCCESS: 'FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_FAILURE: 'FETCH_COLLECTIONS_FAILURE',
};

export default ShopActionTypes;
