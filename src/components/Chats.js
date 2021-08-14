import React from 'react';
import more from '../assets/more.svg';
import mic from '../assets/mic.svg';
import '../Styles/css/chats.css';
import Avatar from './Avatar';
import { useSelector } from 'react-redux';
import ChatContent from './ChatContent';

const Chats = () => {
  const chats = useSelector(state => state.chats);
  return (
    <div id="chats">
      <div className="chatsHeader">
        <div className="info">
          <p>
            Member <span>(25)</span>
          </p>
          <span>View All</span>
        </div>
        <div className="images">
          {chats.groupUser.map(user => {
            return (
              <Avatar
                key={user.id}
                image={user.profileurl}
                isOnline={user.isOnline}
              />
            );
          })}
        </div>
      </div>
      <div className="groupChat">
        <p>Group Chat</p>
        <div className="allChats">
        {
          chats.chats.map(chat => <ChatContent key={chat.id} image={chats.groupUser[chat.userId].profileurl} msg={chat.msg} isCurrUser={chat.userId === chats.currentUserID}/>)
        }
        </div>
      </div>
      <div className="inputs">
        <input type="text" placeholder="Write here..." />
        <img src={mic} alt="mic" />
        <img src={more} alt="more" />
      </div>
    </div>
  );
};

export default Chats;
