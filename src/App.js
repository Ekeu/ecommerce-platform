import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

class App extends Component {
  /**
   * Get user state whatever the provider
   */

  unsubscribeFromAuth = null;

  /**
   * We don't want to remount our app, what we want is
   * to always know when firebase has realised
   * when the authentication state has changed.
   */
  componentDidMount() {
    const { setCurentUser } = this.props;

    /**
     * onAuthStateChanged ==> is an open subscription
     *
     * It's an open messaging system between our application
     * and our firebase app.
     *
     * When ever any changes occur on firebase from any source
     * related to this application firebase sends out a message that
     * says that the OAuth state has changed - the suer has updated
     * (e.g SignIn/SignOut). Giving use the current user. We don't have
     * to manually and this connection is always open as long as our
     * component is mounted.
     *
     * But because it's an open connection we also have to close
     * subscriptions when this component unmounts, because we don't
     * want memory leaks in our JS application. (Check the unsubscribeFromAuth method)
     */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        /**
         * Constantly listening to changes on the referenced document
         */
        userRef.onSnapshot((snapShot) => {
          setCurentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurentUser(userAuth);
      }
    });
  }

  /**
   * onAuthStateChanged gives us back a function that when we call closes the connection.
   *
   * We wan to close it when ever our component unmounts
   */

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  userRedirect = (Component) =>
    this.props.currentUser ? <Redirect to='/' /> : <Component />;

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/' component={HomePage} />
          <Route
            exact
            path='/signin'
            render={() => this.userRedirect(SignIn)}
          />
          <Route
            exact
            path='/signup'
            render={() => this.userRedirect(SignUp)}
          />
        </Switch>
      </>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
/**
 * The first argument being mapStateToProps, ou App doesn't
 * need currentUser anymore because either from passing it
 * to the header (which we don't need anymore since our
 * header not gets it's state directly from the store) it only
 * sets it and does nothing with the currentUser value in it's
 * component.
 */
/**
 * So what we are going to is pass null as fire argument since
 * we don't need to pass any state to our props from the reducer
 */

/**
 * mapDispatchToProps (optional argument): Get's a dispatch property and returns
 * an object were the prop name is whatever prop we want to pass in that dispatches
 * the new action that we are trying to pass.
 *
 * @param {object} dispatch A way for redux to know that whatever object you're passing me is going to be an action object that I'm going to pass to every reducer.
 * @returns {object} {property: value} The property being the actual prop we pass in our component
 */
const mapDispatchToProps = (dispatch) => ({
  setCurentUser: (user) => dispatch(setCurentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
