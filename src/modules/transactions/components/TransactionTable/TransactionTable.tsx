import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Balance } from '../../types';
import { Alert } from '@mui/material';
import SkeletonLoading from '../SkeletonLoader';
import { format } from 'date-fns';
import AmountText from '../AmountText';
import TableHeader from '../TableHeader';

interface TransactionTableProps {
  data?: Balance[];
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
}

const TransactionTable = ({
  data,
  isSuccess,
  isError,
  isLoading,
}: TransactionTableProps): JSX.Element => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table
          data-testID='transaction-table'
          sx={{ minWidth: 650 }}
          aria-label='simple table'
        >
          <TableHeader
            tableHeaderTitles={['UserID', 'GBP', 'USD', 'EUR', 'Last Activity']}
          />
          <TableBody>
            {isSuccess &&
              data &&
              data.map((transaction: Balance) => (
                <TableRow
                  key={transaction.userId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align='left'>{transaction.userId}</TableCell>
                  <TableCell align='left'>
                    <AmountText amount={transaction.GBP} />
                  </TableCell>
                  <TableCell align='left'>
                    <AmountText amount={transaction.USD} />
                  </TableCell>
                  <TableCell align='left'>
                    <AmountText amount={transaction.EUR} />
                  </TableCell>
                  <TableCell align='left'>
                    {format(
                      new Date(transaction.lastTransactionDate),
                      'dd/MM/yyyy',
                    )}
                  </TableCell>
                </TableRow>
              ))}
            {isLoading && <SkeletonLoading numberOfSkeletons={5} />}
            {isError && (
              <TableRow>
                <Alert severity='error'>
                  There was an error loading the data, please try again later
                </Alert>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default React.memo(TransactionTable);
