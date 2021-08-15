import React from 'react';
import Avatar from './Avatar';
import WaveSurferComponent from './WaveSurferComponent';

const ChatContent = ({ image, msg, isCurrUser, aud }) => {
  return (
    <div>
      <div className={`chat__item ${isCurrUser ? 'me' : 'other'}`}>
        <div className="chat__item__content">
          {msg ? (
            <div className="chat__msg">{msg}</div>
          ) : (
            <WaveSurferComponent aud={aud} />
          )}
        </div>
        <Avatar isOnline="active" image={image} />
      </div>
      <div className={`chat__meta ${isCurrUser ? 'me' : 'other'}`}>
        <span>08:00 AM</span>
      </div>
    </div>
  );
};

export default ChatContent;
