import { TableRow, TableCell, Skeleton } from '@mui/material';
import React from 'react';

interface SkeletonLoadingProps {
  numberOfSkeletons: number;
}

const SkeletonLoading = ({
  numberOfSkeletons,
}: SkeletonLoadingProps): JSX.Element => {
  return (
    <>
      {Array.from(Array(numberOfSkeletons).keys()).map((key) => (
        <TableRow
          data-testID={'skeleton-loader'}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align='left'>
            <Skeleton variant='text' />
          </TableCell>
          <TableCell align='left'>
            <Skeleton variant='text' />
          </TableCell>
          <TableCell align='left'>
            <Skeleton variant='text' />
          </TableCell>
          <TableCell align='left'>
            <Skeleton variant='text' />
          </TableCell>
          <TableCell align='left'>
            <Skeleton variant='text' />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default React.memo(SkeletonLoading);
