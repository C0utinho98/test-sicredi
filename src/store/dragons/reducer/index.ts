import { Reducer } from 'redux';
import { IDragonState } from './types';

const INITIAL_STATE: IDragonState = {
  dragonSelected: { id: '', name: '', type: '', createdAt: new Date() },
  dragons: [[]],
  totalPages: 0,
};

const dragons: Reducer<IDragonState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_DRAGONS_SUCCESS': {
      return {
        ...state,
        dragons: action.payload.dragons,
        totalPages: action.payload.totalPages,
      };
    }
    default: {
      return state;
    }
  }
};

export default dragons;
