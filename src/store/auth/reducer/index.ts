import { Reducer } from 'redux';
import { IAuthState } from './types';

const INITIAL_STATE: Omit<IAuthState, 'password'> = {
  name: '',
  signed: false,
};

const auth: Reducer<Omit<IAuthState, 'password'>> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'SIGN_IN': {
      return {
        name: action.payload.name,
        signed: true,
      };
    }
    case 'SIGN_OUT': {
      return {
        name: '',
        signed: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;
