import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import Create from './index';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useParams: () => ({}),
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

jest.mock('react-redux', () => {
  return {
    useDispatch: () => jest.fn(),
    useSelector: jest.fn(fn => fn()),
  };
});

describe('Create form component', () => {
  it('Render component', () => {
    render(<Create />);
  });

  it('Submit form', async () => {
    const { getByPlaceholderText, getByText } = render(<Create />);

    apiMock.onPost('/dragon').reply(200, {
      name: 'Dragão',
      type: 'Fogo',
    });

    const nameFiled = getByPlaceholderText('Nome do Dragão');
    const passwordField = getByPlaceholderText('Tipo do Dragão');
    const buttonElement = getByText('Cadastrar');

    fireEvent.change(nameFiled, { target: { value: 'Dragão' } });
    fireEvent.change(passwordField, { target: { value: 'Fogo' } });

    await waitFor(() => {
      fireEvent.click(buttonElement);
    });
    expect(mockedHistoryPush).toHaveBeenCalledWith('/main');
  });

  it('Submit form erro', async () => {
    const { getByPlaceholderText, getByText } = render(<Create />);

    apiMock.onPost('/dragon').reply(500, {
      names: 'Dragão',
      types: 'Fogo',
    });

    const nameFiled = getByPlaceholderText('Nome do Dragão');
    const passwordField = getByPlaceholderText('Tipo do Dragão');
    const buttonElement = getByText('Cadastrar');

    fireEvent.change(nameFiled, { target: { value: 'Dragão' } });
    fireEvent.change(passwordField, { target: { value: 'Fogo' } });

    await waitFor(() => {
      fireEvent.click(buttonElement);
    });
  });

  it('Redirect main', async () => {
    const { getByTestId } = render(<Create />);

    const buttonElement = getByTestId('back-button-test');

    fireEvent.click(buttonElement);
    expect(mockedHistoryPush).toHaveBeenCalledWith('/main');
  });
});
