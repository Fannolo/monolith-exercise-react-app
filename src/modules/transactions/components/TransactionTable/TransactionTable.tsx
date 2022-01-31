import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Balance } from '../../types';

interface TransactionTableProps {
  data: Balance[];
}

const TransactionTable = ({ data }: TransactionTableProps): JSX.Element => {
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell align='left'>GBP</TableCell>
            <TableCell align='left'>USD</TableCell>
            <TableCell align='left'>EUR</TableCell>
            <TableCell align='left'>Last Activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((transaction: Balance) => (
            <TableRow
              key={transaction.userId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left'>{transaction.userId}</TableCell>
              <TableCell align='left'>{transaction.GBP}</TableCell>
              <TableCell align='left'>{transaction.USD}</TableCell>
              <TableCell align='left'>{transaction.EUR}</TableCell>
              <TableCell align='left'>
                {transaction.lastTransactionDate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default React.memo(TransactionTable);
