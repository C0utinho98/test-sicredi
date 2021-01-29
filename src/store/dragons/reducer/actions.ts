import { Dragon, IDragonState } from './types';

interface response {
  type: string;
  payload: Dragon[];
}

interface responseSuccess {
  type: string;
  payload?: Omit<IDragonState, 'dragonSelected'>;
}

export function getDragonsRequest(data: Dragon[]): response {
  return {
    type: 'GET_DRAGONS_REQUEST',
    payload: data,
  };
}

export function getDragonsSuccess(
  data: Omit<IDragonState, 'dragonSelected'>,
): responseSuccess {
  return {
    type: 'GET_DRAGONS_SUCCESS',
    payload: data,
  };
}
