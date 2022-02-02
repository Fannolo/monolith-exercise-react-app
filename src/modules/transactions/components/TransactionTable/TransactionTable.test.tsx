import { render } from '@testing-library/react';
import React from 'react';
import { Balance } from '../../types';
import TransactionTable from './index';

const renderTransactionTable = ({
  data = [],
  isLoading = false,
  isError = false,
  isSuccess = false,
}: {
  data?: Balance[];
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}) =>
  render(
    <TransactionTable
      data={data}
      isLoading={isLoading}
      isError={isError}
      isSuccess={isSuccess}
    />,
  );
describe('TransactionTable', () => {
  it('should render', () => {
    const { getByTestId } = renderTransactionTable({});
    expect(getByTestId('transaction-table')).not.toBeNull();
  });

  it('should render the balance of the transactions if the data is provided', () => {
    const { getByText } = renderTransactionTable({
      isSuccess: true,
      data: [
        {
          userId: 'b4521412-2eeb-43f3-a50d-be976b23189d',
          lastTransactionDate: '2020-05-29T16:59:39Z',
          EUR: '-853.62',
          GBP: '-886.69',
          USD: '0',
        },
      ],
    });
    expect(getByText('b4521412-2eeb-43f3-a50d-be976b23189d')).not.toBeNull();
  });
  it('should render an error message is there is an error', () => {
    const { getByText } = renderTransactionTable({ isError: true });
    expect(
      getByText('There was an error loading the data, please try again later'),
    ).not.toBeNull();
  });
});
