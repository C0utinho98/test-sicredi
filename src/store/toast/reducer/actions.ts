import { IToastState } from './types';

interface response {
  type: string;
  payload?: Omit<IToastState, 'id'>;
}

export function openToast(data: Omit<IToastState, 'id'>): response {
  return {
    type: 'OPEN_TOAST',
    payload: data,
  };
}

export function closeToast(): response {
  return {
    type: 'CLOSE_TOAST',
  };
}
