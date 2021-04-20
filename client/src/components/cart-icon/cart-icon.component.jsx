import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ custom, toggleCartHidden, itemCount }) => {
  return (
    <button
      onClick={toggleCartHidden}
      className={`${custom} flex-shrink-0 bg-white p-1 text-blue-gray-400 rounded-full hover:text-blue-gray-500 focus:outline-none`}
    >
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
        {itemCount > 0 && (
          <span className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-red-500'></span>
        )}
      </span>
    </button>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
