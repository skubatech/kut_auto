import React, { FC, useState } from 'react';
import styles from './customSelect.module.scss';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { COLORS } from '../../constants';

export const CustomSelect: FC = () => {
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={styles.wrapper}>
      <h5 className={styles.title}>Возраст автомобиля</h5>
      <FormControl
        variant='standard'
        sx={
          {
            // 'MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
            //     backgroundColor: COLORS.formField
            // }
          }
        }
        fullWidth
      >
        <InputLabel
          id='demo-simple-select-standard-label'
        >
          Age
        </InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={age}
          onChange={handleChange}
          label='Age'
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          IconComponent={() => (
            <img
              src='assets/icons/arrowUp.svg'
              alt='Arrow icon'
              style={{ transform: open ? '' : 'rotate(180deg)' }}
            />
          )}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
