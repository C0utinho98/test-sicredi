import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import Header from './index';

const mockedHistoryPush = jest.fn();

jest.mock('react-redux', () => {
  return {
    useDispatch: () => jest.fn(),
    useSelector: jest.fn(fn => fn()),
  };
});

jest.mock('react-router-dom', () => {
  return {
    useParams: () => ({ id: 1 }),
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

describe('Header component', () => {
  it('Render component', () => {
    render(<Header>Test</Header>);
  });

  it('Redirect create dragon', () => {
    const { getByText } = render(<Header>Test</Header>);

    const button = getByText('Cadastrar Dragão');

    fireEvent.click(button);
    expect(mockedHistoryPush).toHaveBeenCalledWith('/create');
  });

  it('Redirect main page', () => {
    const { getByTestId } = render(<Header>Test</Header>);

    const button = getByTestId('redirectMain');

    fireEvent.click(button);
    expect(mockedHistoryPush).toHaveBeenCalledWith('/main');
  });

  it('Logout', async () => {
    const { getByTestId } = render(<Header>Test</Header>);

    const button = getByTestId('logout');

    fireEvent.click(button);
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    const dummyDispatch = jest.fn();
    await useDispatchMock.mockReturnValue(dummyDispatch);

    expect(dummyDispatch).not.toHaveBeenCalled();
  });
});
