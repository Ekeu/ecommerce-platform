import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Transition } from '@headlessui/react';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item.component';
import {
  selectCartItems,
  selectCartVisibility,
} from '../../redux/cart/cart.selectors';
import { Link, withRouter } from 'react-router-dom';
import EmptyCart from '../empty-cart/empty-cart.component';
import CustomButton from '../custom-button/custom-button.component';

const Cart = ({ hidden, toggleCartHidden, cartItems, history }) => {
  const [removeOverlay, setRemoveOverlay] = useState(true);
  return (
    <section
      class={`fixed inset-0 overflow-hidden z-20 ${
        removeOverlay ? 'hidden' : null
      }`}
      aria-labelledby='slide-over-title'
      role='dialog'
      aria-modal='true'
    >
      <div class='absolute inset-0 overflow-hidden'>
        <div class='absolute inset-0' aria-hidden='true'></div>
        <div class='absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16'>
          <Transition
            show={hidden}
            beforeEnter={() => setRemoveOverlay(false)}
            enter='transform transition ease-in-out duration-500 sm:duration-700'
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transform transition ease-in-out duration-500 sm:duration-700'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'
            afterLeave={() => setRemoveOverlay(true)}
          >
            <div class='w-screen max-w-md'>
              <div class='h-screen flex flex-col bg-white shadow-xl overflow-y-scroll'>
                <div class='p-6'>
                  <div class='flex items-start justify-between'>
                    <h2
                      class='text-lg font-medium text-gray-900'
                      id='slide-over-title'
                    >
                      Cart
                    </h2>
                    <div class='ml-3 h-7 flex items-center'>
                      <button
                        onClick={toggleCartHidden}
                        class='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500'
                      >
                        <span class='sr-only'>Close panel</span>
                        {/*                   <!-- Heroicon name: outline/x -->
                         */}{' '}
                        <svg
                          class='h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class='border-b border-gray-200'>
                  <div class='px-6'>
                    <nav class='-mb-px flex space-x-6'>
                      {/*                 <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                       */}{' '}
                      <Link
                        to='#'
                        class='border-red-500 text-red-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                      >
                        All
                      </Link>
                      <Link
                        to='#'
                        class='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                      >
                        Wishlist
                      </Link>
                    </nav>
                  </div>
                </div>
                <ul class='divide-y divide-gray-200 overflow-y-visible'>
                  {cartItems.length ? (
                    cartItems.map((cartItem) => (
                      <CartItem key={cartItem.id} item={cartItem} />
                    ))
                  ) : (
                    <EmptyCart
                      imageUrl='https://res.cloudinary.com/dmcookpro/image/upload/v1618334629/Asset_16_hjisno.png'
                      alt='Empty Cart'
                      title='Your cart is empty! ????'
                      subtitle="You still haven't bought anything"
                    />
                  )}
                </ul>
                <div class='flex-shrink-0 px-4 border-t border-gray-200 py-5 sm:px-6 mt-auto'>
                  <div class='space-x-3 flex justify-end'>
                    <CustomButton
                      onClick={toggleCartHidden}
                      type='button'
                      custom='bg-white border-blue-gray-300 text-blue-gray-700 hover:bg-blue-gray-50'
                    >
                      Close
                    </CustomButton>
                    <CustomButton
                      type='button'
                      onClick={() => {
                        history.push('/checkout');
                        toggleCartHidden();
                      }}
                    >
                      Checkout
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartVisibility,
  cartItems: selectCartItems,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
