import { createSelector } from 'reselect';

/**
 * Two types of selectors exist
 *
 * 1. An input selector that doesn't use createSelector
 * 2. An output selector that does use createSelector
 */

//Input selector ==> Function that get's the whole state and returns just a slice of it
const selectCart = (state) => state.cart;

//Output selector - Selects proporties on our cart

/**
 * createSelector takes two arguments:
 * 1. A collection (an array) of input selectors
 * 2. A function that will return the desired value out of the selector. And what we pass in
 * as parameter in the the function is each output of the input array but in the order those inputs
 * were written
 */
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartVisibility = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
)
