import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div class='max-w-7xl mx-auto sm:px-6 lg:px-8 lg:py-8 '>
      <div class='flex flex-col font-hind'>
        <div class='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div class='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div class='shadow overflow-hidden border-b border-blue-gray-200 sm:rounded-lg'>
              <table class='min-w-full divide-y divide-gray-200'>
                <thead class='bg-blue-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      class='px-6 py-3 text-left text-xs font-medium text-blue-gray-500 uppercase tracking-wider'
                    >
                      Product
                    </th>
                    <th
                      scope='col'
                      class='px-6 py-3 text-left text-xs font-medium text-blue-gray-500 uppercase tracking-wider'
                    >
                      Description
                    </th>
                    <th
                      scope='col'
                      class='px-6 py-3 text-left text-xs font-medium text-blue-gray-500 uppercase tracking-wider'
                    >
                      Quantity
                    </th>
                    <th
                      scope='col'
                      class='px-6 py-3 text-left text-xs font-medium text-blue-gray-500 uppercase tracking-wider'
                    >
                      Price
                    </th>
                    <th scope='col' class='relative px-6 py-3'>
                      <span class='sr-only'>Remove</span>
                    </th>
                  </tr>
                </thead>
                <tbody class='bg-white divide-y divide-gray-200'>
                  {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <dl class='mt-5'>
          <div class='px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 float-right'>
            <dt class='text-sm font-medium text-blue-gray-500 truncate'>
              Total
            </dt>
            <dd class='mt-1 text-3xl font-semibold text-blue-gray-900'>
              ${total}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
