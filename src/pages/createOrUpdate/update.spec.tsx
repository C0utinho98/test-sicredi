import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { fireEvent, render, waitFor } from '@testing-library/react';
import Update from './index';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useParams: () => ({ id: 1 }),
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

describe('Update component', () => {
  it('Render component', () => {
    render(<Update />);
  });
  it('Submit form', async () => {
    const { getByPlaceholderText, getByText } = render(<Update />);

    apiMock.onGet('/dragon/1').reply(200, {
      name: 'Dragão',
      type: 'Fogo',
    });

    apiMock.onPut('/dragon/1').reply(200, {
      name: 'Dragão',
      type: 'Fogo',
    });

    const nameFiled = getByPlaceholderText('Nome do Dragão');
    const passwordField = getByPlaceholderText('Tipo do Dragão');
    const buttonElement = getByText('Editar');

    fireEvent.change(nameFiled, { target: { value: 'Dragão' } });
    fireEvent.change(passwordField, { target: { value: 'Fogo' } });

    await waitFor(() => {
      fireEvent.click(buttonElement);
    });
    expect(mockedHistoryPush).toHaveBeenCalledWith('/main');
  });

  it('Submit form error', async () => {
    const { getByPlaceholderText, getByText } = render(<Update />);

    apiMock.onGet('/dragon/1').reply(200, {
      name: 'Dragão',
      type: 'Fogo',
    });

    apiMock.onPut('/dragon/1').reply(500, {
      names: 'Dragão',
      types: 'Fogo',
    });

    const nameFiled = getByPlaceholderText('Nome do Dragão');
    const passwordField = getByPlaceholderText('Tipo do Dragão');
    const buttonElement = getByText('Editar');

    fireEvent.change(nameFiled, { target: { value: 'Dragão' } });
    fireEvent.change(passwordField, { target: { value: 'Fogo' } });

    await waitFor(() => {
      fireEvent.click(buttonElement);
    });
  });

  it('Delete dragon', async () => {
    const { getByPlaceholderText, getByText } = render(<Update />);

    apiMock.onGet('/dragon/1').reply(200, {
      name: 'Dragão',
      type: 'Fogo',
    });

    apiMock.onDelete('/dragon/1').reply(200);

    const nameFiled = getByPlaceholderText('Nome do Dragão');
    const passwordField = getByPlaceholderText('Tipo do Dragão');
    const buttonElement = getByText('Excluir');

    fireEvent.change(nameFiled, { target: { value: 'Dragão' } });
    fireEvent.change(passwordField, { target: { value: 'Fogo' } });

    await waitFor(() => {
      fireEvent.click(buttonElement);
    });

    expect(mockedHistoryPush).toHaveBeenCalledWith('/main');
  });

  it('Delete dragon with dragon', async () => {
    const { getByPlaceholderText, getByText } = render(<Update />);

    apiMock.onGet('/dragon/1').reply(200, {
      name: 'Dragão',
      type: 'Fogo',
    });

    apiMock.onDelete('/dragon/1').reply(500);

    const nameFiled = getByPlaceholderText('Nome do Dragão');
    const passwordField = getByPlaceholderText('Tipo do Dragão');
    const buttonElement = getByText('Excluir');

    fireEvent.change(nameFiled, { target: { value: 'Dragão' } });
    fireEvent.change(passwordField, { target: { value: 'Fogo' } });

    await waitFor(() => {
      fireEvent.click(buttonElement);
    });
  });
});
