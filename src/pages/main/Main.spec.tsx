import React from 'react';
import * as reactRedux from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import Main from './index';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

const mockedDispatch = jest.fn();
const mockedHistoryPush = jest.fn();

jest.mock('react-redux', () => {
  return {
    useDispatch: () => mockedDispatch,
    useSelector: jest.fn(fn => fn()),
  };
});

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

describe('Main component', () => {
  it('Render component', async () => {
    const mockData = [
      [
        {
          id: '130',
          createdAt: '2021-01-28T06:17:43.233Z',
          name: 'Armando',
          type: 'Black',
          histories: [],
        },
        {
          id: '132',
          createdAt: '2021-01-27T20:21:06.488Z',
          name: 'Ay',
          type: 'Raikage',
          histories: [],
        },
      ],
    ];

    apiMock.onGet('/dragon').reply(200, {
      data: mockData,
    });

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue(mockData);

    render(<Main />);
  });

  it('Open toast', async () => {
    const mockData = [];

    apiMock.onGet('/dragon').reply(500, {
      data: mockData,
    });

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue(mockData);

    render(<Main />);
  });

  it('Redirect', async () => {
    const mockData = [
      [
        {
          id: '130',
          createdAt: '2021-01-28T06:17:43.233Z',
          name: 'Dragonite',
          type: 'Black',
          histories: [],
        },
        {
          id: '132',
          createdAt: '2021-01-27T20:21:06.488Z',
          name: 'Ay',
          type: 'Raikage',
          histories: [],
        },
      ],
    ];

    apiMock.onGet('/dragon').reply(200, {
      data: mockData,
    });

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue(mockData);

    const { getByTestId } = render(<Main />);

    const buttonElement = getByTestId('Dragonite');

    fireEvent.click(buttonElement);

    expect(mockedHistoryPush).toHaveBeenCalledWith('/update/130');
  });
});
