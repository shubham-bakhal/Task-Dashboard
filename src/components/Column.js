import React from 'react';
import '../Styles/css/column.css';
import Card from './Card';
import { ItemTypes } from '../utils/item';

import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { movefromcompleted, movefromnextup, movefromprogress } from '../actions/task.action';

const Column = ({ type, list }) => {
  const emptyBoxes = () => {
    var elements = [];
    for (let i = list.length; i < 3; i++) {
      elements.push(<div key={i} className="emptybox dashedBorder"></div>);
    }
    return elements;
  };

  const [{ isOver }, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      moveCard(item);
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });
  const dispatch = useDispatch();

  const moveCard = cardObj => {

    switch (cardObj.tasktype) {
      case 'nextUp':
        dispatch(movefromnextup(cardObj, type));
        break;
      case 'progress':
        dispatch(movefromprogress(cardObj, type));
        break;
      case 'completed':
        dispatch(movefromcompleted(cardObj, type));
        break;
      default:
        break;
    }
  };

  return (
    <div className="column" ref={dropRef}>
      <div className="progress">
        <div className="bigbox">
          <p>{type}</p>
          <div className="smallbox">
            <p>{list.length}</p>
          </div>
        </div>
      </div>
      {list.map(task => {
        return (
          <div key={task.id} className="cards">
            <Card task={task} />
          </div>
        );
      })}
      {list.length < 3 ? (
        emptyBoxes()
      ) : (
        <div className="emptybox dashedBorder"></div>
      )}

      <div className="new dashedBorder">+</div>
    </div>
  );
};

export default Column;
