import { chatConstants } from '../actions/constants';

const chatinitState = {
  currentUserID: 2,
  groupUser: [
    {
      id: 1,
      isOnline: 'active',
      profileurl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 2,
      isOnline: 'active',
      profileurl:
        'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 3,
      isOnline: 'active',
      profileurl:
        'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 4,
      isOnline: 'active',
      profileurl:
        'https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 5,
      isOnline: '',
      profileurl:
        'https://images.unsplash.com/photo-1611774812120-79d97450b31c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 6,
      isOnline: '',
      profileurl:
        'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    },
  ],
  chats: [
    {
      id: 1,
      msg: 'Selamat pagi✨',
      userId: 1,

      time: '8:00 AM',
      seen: true,
    },
    {
      id: 2,
      msg: 'Pagi Mas Piko🔥',
      userId: 2,
      time: '8:00 AM',
      seen: true,
    },
    {
      id: 3,
      msg: 'Pagi Mas Piko, Langsung saja Ada apa gerangan mas?',
      userId: 3,
      time: '8:00 AM',
      seen: true,
    },
    {
      id: 4,
      msg: 'Sekuttt 🤘',
      userId: 4,
      time: '8:00 AM',
      seen: true,
    },
    {
      id: 5,
      msg: 'Selamat pagi, Mas!',
      userId: 5,
      time: '8:00 AM',
      seen: true,
    },
    {
      id: 6,
      msg: '',
      audiourl: '',
      userId: 1,
      time: '8:00 AM',
      seen: true,
    },
    {
      id: 7,
      msg: 'delete',
      userId: 5,
      time: '8:00 AM',
      seen: true,
    },
  ],
};

const chatReducres = (state = chatinitState, action) => {
  switch (action.type) {
    // case taskConstants.MOVE_FROM_COMPLETE_TO_PROGRESS:
    //   const appendobjtoprocess1 = state.completeList.filter(
    //     task => task.id === action.payload.obj.id
    //   );
    //   appendobjtoprocess1[0].type = 'progress';
    //   const removedcompete1 = state.completeList.filter(
    //     task => task.id !== action.payload.obj.id
    //   );
    //   state = {
    //     ...state,
    //     completeList: removedcompete1,
    //     progressList: [...state.progressList, ...appendobjtoprocess1],
    //   };
    //   break;

    default:
      return state;
  }

  return state;
};

export default chatReducres;
