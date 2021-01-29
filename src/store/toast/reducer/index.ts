import { v4 as uuidv4 } from 'uuid';
import { Reducer } from 'redux';
import { IToastState } from './types';

const INITIAL_STATE: IToastState = {
  type: 'info',
  message: '',
  title: '',
  id: '',
};

const toast: Reducer<IToastState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_TOAST': {
      return {
        type: action.payload.type,
        message: action.payload.message,
        title: action.payload.title,
        id: uuidv4(),
      };
    }

    default: {
      return state;
    }
  }
};

export default toast;
