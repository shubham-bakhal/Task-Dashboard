import React from 'react';
import '../Styles/css/chatcontent.css';

const ChatContent = ({ image, msg , isCurrUser}) => {
  console.log(isCurrUser);
  return (
    <div id="chatcontent">
      <div>
        <div className="posdown">
          <img src={image} alt="" />
        </div>

        <div className="msg">
          <p>{msg}</p>
        </div>
      </div>
      <span>08:00 AM</span>
    </div>
  );
};

export default ChatContent;
