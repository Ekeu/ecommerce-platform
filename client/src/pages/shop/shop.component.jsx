import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overwiew.container';
import CollectionPageContainer from '../collection/collection.container';

/**
 * Now that we have switched to Redux-Thunk with a Promise based pattern we now import our new action creator
 * fetchCollectionsStartAsync instead of updateCollections
 */
//import { updateCollections } from '../../redux/shop/shop.actions';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// Now handled by the reducer and thunk
/* import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'; */

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // Not needed since everything is now handled with thunk
  /* updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)), */
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
