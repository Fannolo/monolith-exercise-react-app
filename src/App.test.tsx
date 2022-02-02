import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const mockResponse = {
  data: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
};

jest.mock('./modules/transactions/api', () => ({
  useGetTransactionsQuery: jest.fn().mockResolvedValue(mockResponse),
  useGetMediumTransactionsQuery: jest.fn().mockResolvedValue(mockResponse),
  useGetLargeTransactionsQuery: jest.fn().mockResolvedValue(mockResponse),
}));

test('renders the transactions title', () => {
  render(<App />);
  const tableTitle = screen.getByText('Transactions');
  expect(tableTitle).not.toBeNull();
});
