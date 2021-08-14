import { taskConstants } from '../actions/constants';

const taskinitState = {
  nextUpList: [
    {
      id: 1,
      type: 'nextUp',
      emoji: 'raisehand',
      text: '[Memoji] - Create Prototype Mobile for Get Notification in Principle',
      date: 'Mar 26',
      color: 'orange',
      userIDs: [1, 2, 3],
    },
    {
      id: 2,
      type: 'nextUp',
      emoji: 'congo',
      text: '[OWW] - Draw & animate illustration for OWW 4th anniversary',
      date: 'Mar 30',
      color: 'green',
      userIDs: [1, 4, 3],
    },
    {
      id: 3,
      type: 'nextUp',
      emoji: 'game',
      text: '[Metaco] - Create draft design for User Journey earning coin an Apps',
      date: 'Apr 1',
      color: 'green',
      userIDs: [1, 2],
    },
  ],
  progressList: [
    {
      id: 4,
      type: 'progress',
      emoji: 'raisehand',
      text: '[Lux] - Design Lux Pet Shop Product Page Responsive Website',
      date: 'Mar 29',
      color: 'green',
      userIDs: [5, 2, 4],
    },
    {
      id: 5,
      type: 'progress',
      emoji: 'fire',
      text: '[OWW]-Learn SVGator for Creating OWW Animation Part 2',
      date: 'Mar 26',
      color: 'orange',
      userIDs: [2, 4, 6],
    },
  ],
  completeList: [
    {
      id: 6,
      type: 'completed',
      emoji: 'fire',
      text: '[OWW]-Learn SVGator for Creating OWW Animation Part 1',
      date: 'Mar 26',
      color: 'grey',
      userIDs: [4, 5, 6],
    },
    {
      id: 7,
      type: 'completed',
      emoji: 'game',
      text: '[Metaco] - Benchmark Mobile Legend on Earning Diamond ',
      date: 'Mar 25',
      color: 'red',
      userIDs: [2, 4, 6],
    },
  ],
};

const taskReducres = (state = taskinitState, action) => {
  switch (action.type) {
    case taskConstants.MOVE_FROM_NEXTUP_TO_PROGRESS:
      let appendobjtoprocess = state.nextUpList.filter(
        task => task.id === action.payload.obj.id
      );
      appendobjtoprocess[0].type = 'progress';
      let removedNextup = state.nextUpList.filter(
        task => task.id !== action.payload.obj.id
      );
      state = {
        ...state,
        nextUpList: removedNextup,
        progressList: [...state.progressList, ...appendobjtoprocess],
      };
      break;

    case taskConstants.MOVE_FROM_NEXTUP_TO_COMPLETE:
      let appendobjtocompelte = state.nextUpList.filter(
        task => task.id === action.payload.obj.id
      );
      appendobjtocompelte[0].type = 'completed';
      let removedNextup1 = state.nextUpList.filter(
        task => task.id !== action.payload.obj.id
      );
      state = {
        ...state,
        nextUpList: removedNextup1,
        completeList: [...state.completeList, ...appendobjtocompelte],
      };
      break;

    case taskConstants.MOVE_FROM_PROGRESS_TO_NEXTUP:
      const appendobjtonextup = state.progressList.filter(
        task => task.id === action.payload.obj.id
      );
      appendobjtonextup[0].type = 'nextUp';
      const removedProgress = state.progressList.filter(
        task => task.id !== action.payload.obj.id
      );
      state = {
        ...state,
        progressList: removedProgress,
        nextUpList: [...state.nextUpList, ...appendobjtonextup],
      };
      break;
    case taskConstants.MOVE_FROM_PROGRESS_TO_COMPLETE:
      const appendobjtocompelte1 = state.progressList.filter(
        task => task.id === action.payload.obj.id
      );
      appendobjtocompelte1[0].type = 'completed';
      const removedProgress1 = state.progressList.filter(
        task => task.id !== action.payload.obj.id
      );
      state = {
        ...state,
        progressList: removedProgress1,
        completeList: [...state.completeList, ...appendobjtocompelte1],
      };
      break;

    case taskConstants.MOVE_FROM_COMPLETE_TO_NEXTUP:
      const appendobjtonextup1 = state.completeList.filter(
        task => task.id === action.payload.obj.id
      );
      appendobjtonextup1[0].type = 'nextUp';
      const removedcompete = state.completeList.filter(
        task => task.id !== action.payload.obj.id
      );
      state = {
        ...state,
        completeList: removedcompete,
        nextUpList: [...state.nextUpList, ...appendobjtonextup1],
      };
      break;
    case taskConstants.MOVE_FROM_COMPLETE_TO_PROGRESS:
      const appendobjtoprocess1 = state.completeList.filter(
        task => task.id === action.payload.obj.id
      );
      appendobjtoprocess1[0].type = 'progress';
      const removedcompete1 = state.completeList.filter(
        task => task.id !== action.payload.obj.id
      );
      state = {
        ...state,
        completeList: removedcompete1,
        progressList: [...state.progressList, ...appendobjtoprocess1],
      };
      break;

    default:
      return state;
  }
  return state;
};

export default taskReducres;
