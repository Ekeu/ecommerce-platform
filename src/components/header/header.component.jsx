import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
//HOC that let's us modify ou component to have access to things related to redux
/**
 * HOCs are functions that take components as arguments and returns
 * a new suit up component
 */
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import Logo from '../../assets/hotShopping.svg';
import './header.styles.scss';
import CustomLink from '../custom-link/custom-link.component';
import Search from '../search/search.component';
import MobileHeader from '../mobile-header/mobile-header.component';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  return (
    <>
      <nav className='bg-white shadow relative'>
        <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex px-2 lg:px-0'>
              <div className='flex-shrink-0 flex items-center'>
                <Link to='/'>
                  <img
                    className='block lg:hidden h-8 w-auto'
                    src={Logo}
                    alt='Hot Shopping'
                  />
                  <img
                    className='hidden lg:block h-8 w-auto'
                    src={Logo}
                    alt='Hot Shopping'
                  />
                </Link>
              </div>
              <div className='hidden lg:ml-6 lg:flex lg:space-x-8'>
                <CustomLink url='/shop' type='nav'>
                  Shop
                </CustomLink>
                <CustomLink url='/contact' type='nav'>
                  Contact
                </CustomLink>
              </div>
            </div>
            <Search />
            <div className='flex items-center lg:hidden'>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-blue-gray-400 hover:text-blue-gray-500 hover:bg-blue-gray-100 focus:outline-none'
                ariaControls='mobile-menu'
                ariaExpanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                <svg
                  className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  ariaHidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                <svg
                  className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  ariaHidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div className='hidden lg:ml-4 lg:flex lg:items-center'>
              <CartIcon />
              {currentUser ? (
                <div className='ml-4 relative flex-shrink-0'>
                  <div>
                    <button
                      type='button'
                      className='bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                      id='user-menu'
                      ariaExpanded='false'
                      ariaHaspopup='true'
                      onClick={() => setUserMenuIsOpen(!userMenuIsOpen)}
                    >
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src={currentUser && currentUser.photoURL}
                        alt={currentUser && currentUser.displayName}
                      />
                    </button>
                  </div>
                  <Transition
                    show={userMenuIsOpen}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <div
                      className='z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='user-menu'
                    >
                      <CustomLink url='/products' role='menuitem'>
                        Products
                      </CustomLink>
                      <CustomLink url='/orders' role='menuitem'>
                        Orders
                      </CustomLink>
                      <CustomLink
                        type='button'
                        role='menuitem'
                        onClick={() => auth.signOut()}
                      >
                        Sign out
                      </CustomLink>
                    </div>
                  </Transition>
                </div>
              ) : (
                <CustomLink
                  to='/signin'
                  type='link-button'
                  custom='ml-5 px-4 py-2  text-base font-medium text-white bg-red-500 hover:bg-red-600'
                >
                  Sign in
                </CustomLink>
              )}
            </div>
          </div>
        </div>
        <MobileHeader menuOpen={menuOpen} />
      </nav>
      <Cart />
    </>
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
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapStateToProps)(Header);
