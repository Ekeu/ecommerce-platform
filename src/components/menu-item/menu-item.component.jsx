import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <div
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      className={`${size} menu-item bg-center bg-cover overflow-hidden shadow-xl rounded-xl`}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className={`background-image w-full h-full bg-center bg-cover`}
      />
      <div className='content absolute'>
        <h1 className='title font-poppins'>{title.toUpperCase()}</h1>
        <div className='subtitle font-hind'>SHOP NOW</div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
