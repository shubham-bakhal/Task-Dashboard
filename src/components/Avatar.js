import React from 'react';
import '../Styles/css/avatar.css';

const Avatar = ({image, isOnline}) => {
  return (
    <div className="avatar">
      <div className="avatar-img">
        <img src={image} alt="#" />
      </div>
      <span className={`isOnline ${isOnline}`}></span>
    </div>
  );
};

export default Avatar;
