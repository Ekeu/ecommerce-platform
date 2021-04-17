import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

/**
 * Memoizing the return of our function to prevent useless rerendering
 * 
 * Whenever this function gets called and receives collectionUrlParam, 
 * I want to memoize the return of this function (in this case we return a selector). 
 * If this function gets called again with the same collectionUrlParam, 
 * don't return this function because we'll return the same value as last time, 
 * which we've memoized so just return the selector that's been stored.

 */
export const selectShopCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => (collections ? collections[collectionUrlParam] : null)
  )
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)