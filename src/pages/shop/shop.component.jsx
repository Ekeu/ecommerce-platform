import React, { Component } from 'react';
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

class ShopPage extends Component {
  //State is now handled with redux where we use isFetching instad of loading
  /* state = {
    loading: true,
  }; */

  //unsubscribeFromSnapshot = null;

  componentDidMount() {
    /* const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections'); */
    /**
     * In case we need to use the Promised based pattern
     *
     * Using this means that right now we only have the shop page that actually pulls data
     * from our firestore and store it in our state.
     *
     * But if we had other parts of our code/app that needed to leverage this code we would
     * have to re-write it or move it out some how 😥.
     *
     * 😫 Problem ==> Our loading state is also attached to this collection inside this
     * componentDidMount code.
     *
     * What is needed ==> We want to be able to abstract all of this into it's own reusable part
     * of the code. The great thing is that as far as the state goes we can probably actually
     * already imagine that we should put the loading in a Redux state.
     *
     * 🤔 The other thing however is that if our redux was actually able to handle async event-handling
     * we can actually move the async code into an action and then dispatch it accordingly.
     *
     * 🤩 Solution ==> Redux & Redux-Thunk (Redux-Thunk allows us to handle asynchronous event-handling and firing multiple actions)
     */
    // This code has been moved in shop.actions.js
    /* collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    }); */
    //The below code is to handle everything with Google's onSnapShot - Now we have switched to Redux-Thunk Promised based
    /* this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    ); */

    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }
  render() {
    const { match } = this.props;
    //const { loading } = this.state;
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  // Not needed since everything is now handled with thunk
  /* updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)), */
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
