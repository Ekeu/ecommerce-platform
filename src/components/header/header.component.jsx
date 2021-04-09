import React from 'react';
import { Link } from 'react-router-dom';
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

export default Header;
