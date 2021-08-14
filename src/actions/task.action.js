import { taskConstants } from './constants';

export const movefromnextup = (obj, type) => {
  return dispatch => {
    if (type === 'InProcess') {
      dispatch({
        type: taskConstants.MOVE_FROM_NEXTUP_TO_PROGRESS,
        payload: {
          obj: obj,
          type: type,
        },
      });
    } else if (type === 'Completed') {
      dispatch({
        type: taskConstants.MOVE_FROM_NEXTUP_TO_COMPLETE,
        payload: {
          obj: obj,
          type: type,
        },
      });
    }
  };
};
export const movefromprogress = (obj, type) => {
  return dispatch => {
    if (type === 'NextUp') {
      dispatch({
        type: taskConstants.MOVE_FROM_PROGRESS_TO_NEXTUP,
        payload: {
          obj: obj,
          type: type,
        },
      });
    } else if (type === 'Completed') {
      dispatch({
        type: taskConstants.MOVE_FROM_PROGRESS_TO_COMPLETE,
        payload: {
          obj: obj,
          type: type,
        },
      });
    }
  };
};
export const movefromcompleted = (obj, type) => {
  return dispatch => {
    if (type === 'NextUp') {
      dispatch({
        type: taskConstants.MOVE_FROM_COMPLETE_TO_NEXTUP,
        payload: {
          obj: obj,
          type: type,
        },
      });
    } else if (type === 'InProcess') {
      dispatch({
        type: taskConstants.MOVE_FROM_COMPLETE_TO_PROGRESS,
        payload: {
          obj: obj,
          type: type,
        },
      });
    }
  };
};
