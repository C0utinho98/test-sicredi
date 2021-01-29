import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import Toast from './index';

jest.useFakeTimers();

jest.mock('react-redux', () => {
  return {
    useDispatch: () => jest.fn(),
    useSelector: jest.fn(fn => fn()),
  };
});

describe('Toast component', () => {
  it('Success component', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue({
      id: 1,
      type: 'success',
      title: 'Success',
      message: 'Success',
    });
    render(<Toast />);
  });
  it('Error component', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue({
      id: 1,
      type: 'error',
      title: 'Error',
      message: 'Error',
    });
    render(<Toast />);
  });
  it('Info component', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue({
      id: 1,
      type: 'info',
      title: 'Info',
      message: 'Info',
    });
    render(<Toast />);
  });
  it('Close toast', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue({
      id: 1,
      type: 'info',
      title: 'Info',
      message: 'Info',
    });
    const { getByTestId } = render(<Toast />);

    const button = getByTestId('button');

    fireEvent.click(button);
  });

  it('Autoclose', () => {
    jest.useFakeTimers();
    const useSelectorMock1 = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock1.mockReturnValue({
      id: 1,
      type: 'error',
      title: 'Error',
      message: 'Error',
    });

    render(<Toast />);
    act(() => {
      jest.advanceTimersByTime(5000);
    });
  });
});
