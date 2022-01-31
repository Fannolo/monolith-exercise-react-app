import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

interface TableHeaderProps {
  tableHeaderTitles: string[];
}
const TableHeader = ({ tableHeaderTitles }: TableHeaderProps): JSX.Element => {
  return (
    <TableHead>
      <TableRow>
        {tableHeaderTitles.map((title) => (
          <TableCell>
            <Typography variant={'body2'}>{title}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default React.memo(TableHeader);
