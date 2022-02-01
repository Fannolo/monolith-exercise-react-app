import configureStore from 'redux-mock-store';
import { renderHook } from '@testing-library/react-hooks';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useLazyGetTransactionsQuery } from '../modules/transactions/api';
import mockAxios from 'jest-mock-axios';

const store = configureStore()({});

const wrapper = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

describe('Transactions API', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('should call the api for retrieving small transaction json', () => {
    renderHook(() => useLazyGetTransactionsQuery(), {
      wrapper,
    });
    mockAxios.get.mockResolvedValueOnce({});
    expect(mockAxios.get).toHaveBeenCalledWith(
      `localhost:3000/transaction-small.json`,
    );
  });
  it('should call the api for retrieving medium transaction json', () => {
    renderHook(() => useLazyGetTransactionsQuery(), {
      wrapper,
    });
    mockAxios.get.mockResolvedValueOnce({});
    expect(mockAxios.get).toHaveBeenCalledWith(
      `localhost:3000/transaction-medium.json`,
    );
  });
  it('should call the api for retrieving large transaction json', () => {
    renderHook(() => useLazyGetTransactionsQuery(), {
      wrapper,
    });
    mockAxios.get.mockResolvedValueOnce({});
    expect(mockAxios.get).toHaveBeenCalledWith(
      `localhost:3000/transaction-large.json`,
    );
  });
});
