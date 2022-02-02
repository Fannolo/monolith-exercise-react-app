import React, { useCallback, useState } from 'react';
import { Box } from '@mui/system';
import Selection from './modules/transactions/components/Selection';
import { Paper, Toolbar, Typography } from '@mui/material';
import TransactionTableContent from './modules/transactions/components/TransactionTableContent';
import { useGetLargeTransactionsQuery } from './modules/transactions/api';
const App = (): JSX.Element => {
  const [selectValue, setSelectValue] = useState<string>('None');

  const onChangeSelect = useCallback((value) => {
    setSelectValue(value);
  }, []);

  useGetLargeTransactionsQuery;

  return (
    <Box>
      <Paper>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant='h6' color='inherit' component='div'>
            Transactions
          </Typography>
          <Selection onChangeSelect={onChangeSelect} />
        </Toolbar>
        <TransactionTableContent select={selectValue} />
      </Paper>
    </Box>
  );
};

export default React.memo(App);
