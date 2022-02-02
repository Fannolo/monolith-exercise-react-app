import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';

type Props = {
  onChangeSelect: (value: string) => void;
};

const Selection = ({ onChangeSelect }: Props): JSX.Element => {
  const [value, setValue] = React.useState<string>();

  const handleChange = React.useCallback(
    (event: SelectChangeEvent<string>) => {
      setValue(event.target.value);
      onChangeSelect(event.target.value);
    },
    [onChangeSelect],
  );

  return (
    <FormControl sx={{ p: 1, width: 200 }}>
      <InputLabel id='select-option-transaction-value-label'>
        Select the transaction list
      </InputLabel>
      <Select
        labelId='select-option-transaction-value-label'
        id='select-option-transaction-value'
        value={value || 'None'}
        onChange={handleChange}
      >
        <MenuItem value='None'>
          <em>None</em>
        </MenuItem>
        <MenuItem value='Small'>Small</MenuItem>
        <MenuItem value='Medium'>Medium</MenuItem>
        <MenuItem value='Large'>Large</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selection;
