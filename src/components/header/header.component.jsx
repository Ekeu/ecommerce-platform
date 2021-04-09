import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/hotShopping.svg';

import './header.styles.scss';

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
