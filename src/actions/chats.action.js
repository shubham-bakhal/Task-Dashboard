import { chatConstants } from './constants';

export const newMessage = msg => {
  return dispatch => {
    dispatch({
      type: chatConstants.NEW_MSG,
      payload: {
        msg: msg,
      },
    });
  };
};
