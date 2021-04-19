import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.action';

import './App.css';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const userRedirect = (Component) =>
    currentUser ? <Redirect to='/' /> : <Component />;

  return (
    <>
      <Header />
      <Switch>
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/signin' render={() => userRedirect(SignIn)} />
        <Route exact path='/signup' render={() => userRedirect(SignUp)} />
      </Switch>
    </>
  );
};
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
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
