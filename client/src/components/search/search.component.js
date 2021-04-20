import React from 'react';

const Search = () => {
  return (
    <div className='flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end'>
      <div className='max-w-lg w-full lg:max-w-xs'>
        <label for='search' className='sr-only'>
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <svg
              className='h-5 w-5 text-blue-gray-400'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fill-rule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clip-rule='evenodd'
              />
            </svg>
          </div>
          <input
            id='search'
            name='search'
            className='block w-full pl-10 pr-3 py-2 border border-blue-gray-300 rounded-md leading-5 bg-white placeholder-blue-gray-500 focus:outline-none focus:placeholder-blue-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm font-hind'
            placeholder='Search'
            type='search'
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
