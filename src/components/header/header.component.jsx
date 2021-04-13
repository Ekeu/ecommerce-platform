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
              <button className='flex-shrink-0 bg-white p-1 text-blue-gray-400 rounded-full hover:text-blue-gray-500 focus:outline-none'>
                <span className='sr-only'>Shopping Bag</span>
                <span className='inline-block relative'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                    />
                  </svg>
                  <span className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400'></span>
                </span>
              </button>
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
                    {(ref) => (
                      <div
                        ref={ref}
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
                    )}
                  </Transition>
                </div>
              ) : (
                <a
                  href='/'
                  class='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
                >
                  Sign up
                </a>
              )}
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu --> */}
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
              <button className='ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <span className='sr-only'>Shopping Bag</span>
                {/* <!-- Heroicon name: shopping-bag --> */}
                <span className='inline-block relative'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                    />
                  </svg>
                  <span className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400'></span>
                </span>
              </button>
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
      </nav>
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
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Header);
