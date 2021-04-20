import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <tr>
      <td class='px-6 py-4 whitespace-nowrap'>
        <div class='flex items-center'>
          <div class='flex-shrink-0 h-10 w-10'>
            <img
              class='h-10 w-10 rounded-md object-cover'
              src={imageUrl}
              alt={name}
            />
          </div>
        </div>
      </td>
      <td class='px-6 py-4 whitespace-nowrap'>
        <div class='text-sm text-blue-gray-900'>{name}</div>
      </td>
      <td class='px-6 py-4 whitespace-nowrap flex'>
        <div className='cursor-pointer' onClick={() => removeItem(cartItem)}>&#10094;</div>
        <div class='text-sm text-blue-gray-900 my-0 mx-3'>{quantity}</div>
        <div className='cursor-pointer' onClick={() => addItem(cartItem)}>&#10095;</div>
      </td>
      <td class='px-6 py-4 whitespace-nowrap'>
        <span class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-500'>
          {price}
        </span>
      </td>
      <td class='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
        <span
          onClick={() => clearItemFromCart(cartItem)}
          class='text-red-600 hover:text-red-900 cursor-pointer'
        >
          Remove
        </span>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
