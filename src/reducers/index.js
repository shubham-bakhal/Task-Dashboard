import { combineReducers } from 'redux';
import chatReducres from './chat.reducer';
import taskReducres from './task.reducers';

const rootReducer = combineReducers({
  tasks: taskReducres,
  chats: chatReducres,
});

export default rootReducer;
