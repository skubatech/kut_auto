import React, { FC, useState } from 'react';
import styles from './customSelect.module.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Values {
  text: string;
  value: string;
}

interface Props {
  title: string;
  values: Values[];
}

export const CustomSelect: FC<Props> = ({ title, values }) => {
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
      <h5 className={styles.title}>{title}</h5>
      <FormControl variant='standard' fullWidth>
        <InputLabel
          id='demo-simple-select-standard-label'
          sx={{
            paddingTop: '19px',
            paddingLeft: '29px'
          }}
        >
          {title}
        </InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={age}
          onChange={handleChange}
          label={title}
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
          sx={{paddingRight: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
          {values.map((item) => (
            <MenuItem value={item.value} key={item.text}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
