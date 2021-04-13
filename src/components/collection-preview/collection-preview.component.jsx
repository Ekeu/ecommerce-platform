import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div class='bg-white'>
      <div class='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div class='space-y-12'>
          <div class='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 class='text-3xl font-extrabold text-blue-gray-700 tracking-wide font-bangers sm:text-4xl'>
              {title.toUpperCase()}
            </h2>
          </div>
          <ul class='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
            {items
              .filter((item, idx) => idx < 4)
              .map((item) => (
                <CollectionItem key={item.id} item={item} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollectionPreview;
