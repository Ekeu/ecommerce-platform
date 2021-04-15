import React from 'react';
import { Route } from 'react-router';

import CollectionsOverview from '../../components/collections-overview/collections-overwiew.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </>
  );
};

export default ShopPage;
