import { Alert, Box } from '@mui/material';
import React from 'react';
import {
  useGetLargeTransactionsQuery,
  useGetMediumTransactionsQuery,
  useGetTransactionsQuery,
} from '../../api';
import TransactionTable from '../TransactionTable';

interface TransactionTableContentProps {
  select: string;
}

const TransactionTableContent = ({
  select,
}: TransactionTableContentProps): JSX.Element => {
  const {
    data: transactionsSmall,
    isError: isTransactionSmallError,
    isLoading: isTransactionSmallLoading,
    isSuccess: isTransactionSmallSuccess,
  } = useGetTransactionsQuery(undefined);

  const {
    data: transactionsMedium,
    isError: isTransactionMediumError,
    isLoading: istransactionMediumLoading,
    isSuccess: isTransactionMediumSuccess,
  } = useGetMediumTransactionsQuery(undefined);

  const {
    data: transactionsLarge,
    isError: isTransactionLargeError,
    isLoading: isTransactionLargeLoading,
    isSuccess: isTransactionLargeSuccess,
  } = useGetLargeTransactionsQuery(undefined);

  return (
    <Box>
      {select === 'Small' && (
        <TransactionTable
          data={transactionsSmall}
          isLoading={isTransactionSmallLoading}
          isError={isTransactionSmallError}
          isSuccess={isTransactionSmallSuccess}
        />
      )}
      {select === 'Medium' && (
        <TransactionTable
          data={transactionsMedium}
          isLoading={istransactionMediumLoading}
          isError={isTransactionMediumError}
          isSuccess={isTransactionMediumSuccess}
        />
      )}
      {select === 'Large' && (
        <TransactionTable
          data={transactionsLarge}
          isLoading={isTransactionLargeLoading}
          isError={isTransactionLargeError}
          isSuccess={isTransactionLargeSuccess}
        />
      )}
      {select === 'None' && (
        <Alert severity='warning'>
          There are no transactions to show, please select a value to render a
          table
        </Alert>
      )}
    </Box>
  );
};

export default TransactionTableContent;
