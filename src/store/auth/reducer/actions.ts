import { IAuthState } from './types';

interface response {
  type: string;
  payload?: IAuthState;
}

export function signIn(data: IAuthState): response {
  return {
    type: 'SIGN_IN',
    payload: data,
  };
}

export function signOut(): response {
  return {
    type: 'SIGN_OUT',
  };
}
