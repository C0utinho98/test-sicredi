export interface IToastState {
  id: string;
  title?: string;
  message?: string;
  type: 'success' | 'error' | 'info';
}
