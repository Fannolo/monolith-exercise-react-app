import { MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLazyGetTransactionsQuery } from './modules/transactions/api';
import TransactionTable from './modules/transactions/components';

const App = (): JSX.Element => {
  const [value, setValue] = useState();
  const [getTransactions, { data, isError, isLoading, isSuccess }] =
    useLazyGetTransactionsQuery();

  const handleTransactions = useCallback(async () => {
    await getTransactions(undefined);
  }, [getTransactions]);

  useEffect(() => {
    handleTransactions();
  }, [handleTransactions]);

  const onChangeSelect = useCallback(() => {}, []);

  return (
    <Box>
      <Select
        labelId='demo-simple-select-helper-label'
        value={value}
        label='Age'
        onChange={onChangeSelect}
      >
        <MenuItem value='None'>
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Small'}>Small</MenuItem>
        <MenuItem value={'Medium'}>Medium</MenuItem>
        <MenuItem value={'Large'}>Large</MenuItem>
      </Select>
      {isSuccess && data && data?.length > 0 && (
        <TransactionTable data={data} />
      )}
      {isError && <div>Error</div>}
      {isLoading && <div>Loading</div>}
    </Box>
  );
};

export default React.memo(App);
