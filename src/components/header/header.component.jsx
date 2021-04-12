import React from 'react';
import { Link } from 'react-router-dom';
//HOC that let's us modify ou component to have access to things related to redux
/**
 * HOCs are functions that take components as arguments and returns
 * a new suit up component
 */
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/hotShopping.svg';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => {
  return (
    <div className='header font-hind'>
      <Link className='logo-container' to='/'>
        <Logo className='logo h-8 w-auto sm:h-8' />
      </Link>
      <div className='options'>
        <Link
          className='option text-lg font-medium text-gray-500 hover:text-gray-900'
          to='/shop'
        >
          Shop
        </Link>
        <Link
          className='option text-lg font-medium text-gray-500 hover:text-gray-900'
          to='/contact'
        >
          Contact
        </Link>
        {currentUser ? (
          <div
            className='option text-lg font-medium text-gray-500 hover:text-gray-900'
            onClick={() => auth.signOut()}
          >
            Sign out
          </div>
        ) : (
          <Link
            className='option text-lg font-medium text-gray-500 hover:text-gray-900'
            to='/signin'
          >
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};
/**
 * What we are going to do with connect is we are actually
 * going to it two functions the second one being optional
 * and that's going to give us back a function as a return value
 * in which we are going to pass in our component .i.e Header.
 */
/**
 * The two arguments that wer are going to pass are:
 *
 * ==> mapStateToProps : It allows are component to access the state with the state
 * being our root reducer.
 * ==> mapDispatchToProps (optional argument): Get's a dispatch property and returns 
 * an object were the prop name is whatever prop we want to pass in that dispatches
 * the new action that we are trying to pass. (Cf App component)
 */

/**
 * @param {object} state The root reducer. The top level root reducer
 * @returns {object} {property: value} The property being the actual prop we pass in our component
 */
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
