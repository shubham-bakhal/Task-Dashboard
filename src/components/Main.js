import React from 'react';
import '../Styles/css/main.css';
import dailytask from '../assets/dailytask.png';
import search from '../assets/search.svg';
import notification from '../assets/notification.svg';
import { useSelector } from 'react-redux';
import Column from './Column';

const Main = () => {
  const tasks = useSelector(state => state.tasks);
  const chats = useSelector(state => state.chats);
  return (
    <div id="main">
      <div className="mainHeader">
        <div className="left">
          <div>
            <img src={dailytask} alt="" />
            <h2>Daily Task</h2>
          </div>
          <p>
            Click <span className="highlight">+ New</span> To create new list
            and wait for project manager card.
          </p>
          <p>Don't Create a card by yourself to manage a good colaboration.</p>
        </div>
        <div className="right">
          <img src={search} alt="" />
          <div>
            <img src={notification} alt="" />
            <span className="count">3</span>
          </div>

          <img
            src={chats.groupUser[chats.currentUserID - 1].profileurl}
            alt=""
          />
        </div>
      </div>
      <div className="maincards">
        <Column type="NextUp" list={tasks.nextUpList} />
        <Column type="InProcess" list={tasks.progressList} />
        <Column type="Completed" list={tasks.completeList} />
      </div>
    </div>
  );
};

export default Main;
