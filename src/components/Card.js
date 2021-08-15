import React from 'react';
import { ItemTypes } from '../utils/item';
import raisehand from '../assets/raisehand.png';
import fire from '../assets/fire.png';
import game from '../assets/game.png';
import congo from '../assets/congo.png';
import clock from '../assets/clock.svg';
import more from '../assets/more.svg';

import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';

const Card = ({ task }) => {
  var emoji;
  switch (task.emoji) {
    case 'fire':
      emoji = fire;
      break;
    case 'game':
      emoji = game;
      break;
    case 'congo':
      emoji = congo;
      break;
    case 'raisehand':
      emoji = raisehand;
      break;
    default:
      break;
  }

  const [{ isDragging }, dragRef] = useDrag({
    type: ItemTypes.CARD,
    item: () => ({ id: task.id, tasktype: task.type }),
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  var classs = 'card';
  if (isDragging) {
    classs = 'card remOpacity dashedBorder';
  }

  const chats = useSelector(state => state.chats);

  return (
    <div className={classs} ref={dragRef}>
      <div className="cardheader">
        <img src={emoji} alt="" />
        <img src={more} alt="more" />
      </div>
      <div className="text">
        <p>{task.text}</p>
      </div>
      <div className="cardfooter">
        <div className={`date ${task.color}`}>
          <img src={clock} alt="clock" />
          <p>{task.date}</p>
        </div>
        <div className="people">
          {task.userIDs.map(id => {
            return (
              <span key={id} className="avatar">
                <img
                  src={chats.groupUser[id - 1].profileurl}
                  alt="dp"
                />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
