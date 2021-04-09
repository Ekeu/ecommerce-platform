import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIn from './pages/sign-in/sign-in.component';
import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends Component {
  /**
   * Get user state whatever the provider
   */
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  /**
   * We don't want to remount our app, what we want is
   * to always know when firebase has realised
   * when the authentication state has changed.
   */
  componentDidMount() {
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
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

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </>
    );
  }
}

export default App;
