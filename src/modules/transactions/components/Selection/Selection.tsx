import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

type Props = {
  onChangeSelect: (value: string) => void;
};

const Selection = ({ onChangeSelect }: Props): JSX.Element => {
  const [value, setValue] = React.useState<string>();

  const handleChange = React.useCallback(
    (event: SelectChangeEvent<string>) => {
      alert(event.target.value);
      setValue(event.target.value);
      onChangeSelect(event.target.value);
    },
    [onChangeSelect],
  );

  return (
    <Select
      labelId='demo-simple-select-helper-label'
      value={value}
      label='Age'
      onChange={handleChange}
    >
      <MenuItem value='None'>
        <em>None</em>
      </MenuItem>
      <MenuItem value={'Small'}>Small</MenuItem>
      <MenuItem value={'Medium'}>Medium</MenuItem>
      <MenuItem value={'Large'}>Large</MenuItem>
    </Select>
  );
};

export default Selection;
