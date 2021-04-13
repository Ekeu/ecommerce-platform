import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <li class='px-6 py-5 relative'>
      <div class='group flex justify-between items-center'>
        <span class='-m-1 p-1 block'>
          <div
            class='absolute inset-0 group-hover:bg-blue-gray-50'
            aria-hidden='true'
          ></div>
          <div class='flex-1 flex items-center min-w-0 relative'>
            <span class='flex-shrink-0 inline-block relative'>
              <img
                class='h-10 w-10 rounded-md object-cover'
                src={imageUrl}
                alt={name}
              />
            </span>
            <div class='ml-4 truncate'>
              <p class='text-sm font-medium text-blue-gray-900 truncate'>
                {name}
              </p>
              <p class='text-sm text-blue-gray-500 truncate'>
                {quantity} | ${price}
              </p>
            </div>
          </div>
        </span>
        <div class='ml-2 relative inline-block text-left'>
          <button
            type='button'
            onClick={() => setShowDropdown(!showDropdown)}
            class='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none'
            id='options-menu-0'
            ariaExpanded='false'
            ariaHaspopup='true'
          >
            <span class='sr-only'>Open options menu</span>
            <span class='flex items-center justify-center h-full w-full rounded-full'>
              <svg
                class='w-5 h-5 text-blue-gray-400 group-hover:text-blue-gray-500'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
              </svg>
            </span>
          </button>

          <Transition
            show={showDropdown}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <div
              class='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-0'
            >
              <div class='py-1' role='none'>
                <Link
                  href='#'
                  class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  role='menuitem'
                >
                  Delete
                </Link>
                <Link
                  href='#'
                  class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  role='menuitem'
                >
                  Wishlist
                </Link>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
