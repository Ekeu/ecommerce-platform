import React from 'react';

const CheckoutItem = ({ cartItem: {imageUrl, name, quantity, price} }) => {
  return (
    <tr>
      <td class='px-6 py-4 whitespace-nowrap'>
        <div class='flex items-center'>
          <div class='flex-shrink-0 h-10 w-10'>
            <img class='h-10 w-10 rounded-md object-cover' src={imageUrl} alt={name} />
          </div>
        </div>
      </td>
      <td class='px-6 py-4 whitespace-nowrap'>
        <div class='text-sm text-blue-gray-900'>{name}</div>
      </td>
      <td class='px-6 py-4 whitespace-nowrap'>
        <div class='text-sm text-blue-gray-900'>{quantity}</div>
      </td>
      <td class='px-6 py-4 whitespace-nowrap'>
        <span class='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-500'>
          {price}
        </span>
      </td>
      <td class='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
        <span class='text-red-600 hover:text-red-900 cursor-pointer'>
          Remove
        </span>
      </td>
    </tr>
  );
};

export default CheckoutItem;
