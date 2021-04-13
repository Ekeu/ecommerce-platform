import React from 'react';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <>
      <div
        className={`relative sm:py-16 lg:py-0 ${size ? size : 'col-span-2'}`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <div
          aria-hidden='true'
          className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
        ></div>
        <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-6'>
          <div className='relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden'>
            <img
              className='absolute inset-0 h-full w-full object-cover'
              src={imageUrl}
              alt={title}
            />
            <div
              className='absolute inset-0 bg-rose-500'
              style={{ mixBlendMode: 'multiply' }}
            ></div>
            <div className='absolute inset-0 bg-gradient-to-t from-rose-500 via-red-500 opacity-90'></div>
            <div className='relative px-8'>
              <div className='mt-8'>
                <div className='relative text-lg font-medium text-white md:flex-grow'>
                  <p className='relative font-bangers text-8xl'>
                    {title.toUpperCase()}
                  </p>
                </div>

                <footer className='mt-4'>
                  <p className='text-base font-semibold text-red-200 uppercase'>
                    Shop now
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(MenuItem);
