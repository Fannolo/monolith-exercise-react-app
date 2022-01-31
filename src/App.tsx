import { Box } from '@mui/system';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLazyGetTransactionsQuery } from './modules/transactions/api';
import TransactionTable from './modules/transactions/components';

const App = (): JSX.Element => {
  const [
    getTransactions,
    {
      data: transactionsSmall,
      isError: isTransactionSmallError,
      isLoading: isTransactionSmallLoading,
      isSuccess: isTransactionSmallSuccess,
    },
  ] = useLazyGetTransactionsQuery();

  const handleTransactions = useCallback(async () => {
    await getTransactions(undefined);
  }, [getTransactions]);

  useEffect(() => {
    handleTransactions();
  }, [handleTransactions]);

  const onChangeSelect = useCallback(() => {}, []);

  return (
    <Box>
      {transactionsSmall && transactionsSmall.length > 0 && (
        <TransactionTable
          isSuccess={isTransactionSmallSuccess}
          isError={isTransactionSmallError}
          isLoading={isTransactionSmallLoading}
          data={transactionsSmall}
        />
      )}
    </Box>
  );
};

export default React.memo(App);
