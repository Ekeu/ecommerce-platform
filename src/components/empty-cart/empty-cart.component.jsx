import React from 'react';

const EmptyCart = ({ imageUrl, alt, title, subtitle }) => {
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
                alt={alt}
              />
            </span>
            <div class='ml-4 truncate'>
              <p class='text-sm font-medium text-blue-gray-900 truncate'>
                {title}
              </p>
              <p class='text-sm text-blue-gray-500 truncate'>{subtitle}</p>
            </div>
          </div>
        </span>
      </div>
    </li>
  );
};

export default EmptyCart;
