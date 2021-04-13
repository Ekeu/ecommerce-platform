import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CustomLink from '../custom-link/custom-link.component';

const MobileHeader = ({ currentUser, menuOpen }) => {
  return (
    <div
      className={`${menuOpen ? 'block' : 'hidden'} lg:hidden`}
      id='mobile-menu'
    >
      <div className='pt-2 pb-3 space-y-1'>
        <CustomLink url='/shop' type='mobile'>
          Shop
        </CustomLink>
        <CustomLink url='/contact' type='mobile'>
          Contact
        </CustomLink>
      </div>
      <div className='pt-4 pb-3 border-t border-gray-200'>
        <div className='flex items-center px-4'>
          <div className='flex-shrink-0'>
            <img
              className='h-10 w-10 rounded-full'
              src={currentUser && currentUser.photoURL}
              alt={currentUser && currentUser.displayName}
            />
          </div>
          <div className='ml-3'>
            <div className='text-base font-medium text-gray-800'>
              {currentUser && currentUser.displayName}
            </div>
            <div className='text-sm font-medium text-gray-500'>
              {currentUser && currentUser.email}
            </div>
          </div>
          <CartIcon custom={'ml-auto'} />
        </div>
        <div className='mt-3 space-y-1'>
          <CustomLink
            url='/products'
            custom='text-base font-medium text-blue-gray-500 hover:text-blue-gray-800 hover:bg-blue-gray-100'
          >
            Products
          </CustomLink>
          <CustomLink
            url='/orders'
            custom='text-base font-medium text-blue-gray-500 hover:text-blue-gray-800 hover:bg-blue-gray-100'
          >
            Orders
          </CustomLink>
          <CustomLink
            type='button'
            onClick={() => auth.signOut()}
            custom='text-base font-medium text-blue-gray-500 hover:text-blue-gray-800 hover:bg-blue-gray-100'
          >
            Sign out
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(MobileHeader);
