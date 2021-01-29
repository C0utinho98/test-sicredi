import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import Sign from './index';

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => {
  return {
    useDispatch: () => mockedDispatch,
  };
});

describe('Sign component', () => {
  it('Render component', () => {
    render(<Sign />);
  });

  it('Submit form', async () => {
    const { getByPlaceholderText, getByText } = render(<Sign />);

    const nameFiled = getByPlaceholderText('Digite seu nome');
    const passwordField = getByPlaceholderText('Digite sua senha');
    const buttonElement = getByText('Acessar');

    fireEvent.change(nameFiled, { target: { value: 'Emerson' } });
    fireEvent.change(passwordField, { target: { value: '123' } });

    await waitFor(() => {
      fireEvent.click(buttonElement);
    });

    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    const dummyDispatch = jest.fn();
    await useDispatchMock.mockReturnValue(dummyDispatch);

    expect(dummyDispatch).not.toHaveBeenCalled();
  });
});
