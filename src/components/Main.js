import React from 'react';
import '../Styles/css/main.css';
import dailytask from '../assets/dailytask.png';
import search from '../assets/search.svg';
import notification from '../assets/notification.svg';
import profile from '../assets/profile.png';

const Main = () => {
  return (
    <div id="main">
      <div className="mainHeader">
        <div className="left">
          <div >
            <img src={dailytask} alt="" />
            <h2>Daily Task</h2>
          </div>
          <p>
            Click +New To create new list and wait for project manager card.
          </p>
          <p>Don't Create a card by yourself to manage a good colaboration.</p>
        </div>
        <div className="right">
          <img src={search} alt="" />
          <img src={notification} alt="" />
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="maincards">
          <div className="Progress" >
              <div>Next Up </div>
              <div>In Progress</div>
              <div>Complete</div>
          </div>
          <div className="cards">
                <div>card</div>
                <div>card</div>
                <div>card</div>
                <div>card</div>
                <div>card</div>
                <div>card</div>
                <div>card</div>
                <div>card</div>
                <div>card</div>
                <div>new</div>
                <div>new</div>
                <div>new</div>
          </div>
      </div>
    </div>
  );
};

export default Main;
