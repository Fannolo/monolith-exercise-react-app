import React from 'react';
import { render } from '@testing-library/react';
import TransactionTableContent from './index';
import {
  useGetLargeTransactionsQuery,
  useGetMediumTransactionsQuery,
  useGetTransactionsQuery,
} from '../../api';

const mockResponse = {
  data: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
};

jest.mock('../../api', () => ({
  useGetTransactionsQuery: jest.fn().mockResolvedValue(mockResponse),
  useGetMediumTransactionsQuery: jest.fn().mockResolvedValue(mockResponse),
  useGetLargeTransactionsQuery: jest.fn().mockResolvedValue(mockResponse),
}));

describe('TransactionTableContent', () => {
  it('should render', () => {
    const wrapper = render(<TransactionTableContent select='None' />);
    expect(
      wrapper.getByText(
        'There are no transactions to show, please select a value to render a table',
      ),
    ).not.toBeNull();
  });
  it('should make the API call to the list of transactions when the component is rendered', () => {
    render(<TransactionTableContent select='Small' />);
    expect(useGetTransactionsQuery).toHaveBeenCalled();
    expect(useGetMediumTransactionsQuery).toHaveBeenCalled();
    expect(useGetLargeTransactionsQuery).toHaveBeenCalled();
  });
});
