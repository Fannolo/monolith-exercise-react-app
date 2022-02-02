import { Typography } from '@mui/material';
import React from 'react';

type Props = {
  amount: string | number;
};

const AmountText = ({ amount }: Props) => {
  return (
    <Typography
      variant='body1'
      component='h2'
      sx={{ color: amount == 0 ? 'black' : amount > 0 ? 'green' : 'red' }}
    >
      {typeof amount === 'number' && amount.toFixed(2)}
    </Typography>
  );
};

export default React.memo(AmountText);
