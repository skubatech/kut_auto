import React, { FC, useState } from 'react';
import styles from './customSelect.module.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText } from '@mui/material';

interface Options {
  text: string;
  value: string;
}

interface Props {
  id: string;
  value: string;
  title: string;
  error: boolean;
  options: Options[];
  onChange: (fieldId: string, value: string) => void;
}

export const CustomSelect: FC<Props> = ({
  id,
  title,
  error,
  options,
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={styles.wrapper}>
      <h5 className={styles.title}>{title}</h5>
      <FormControl variant='standard' fullWidth error={error}>
        <InputLabel
          id={`${id}-label`}
          sx={{
            paddingTop: '19px',
            paddingLeft: '29px',
          }}
        >
          {title}
        </InputLabel>
        <Select
          labelId={`${id}-label`}
          id={id}
          value={value}
          onChange={(event) => {
            onChange(id, event.target.value);
          }}
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
          sx={{
            paddingRight: '16px',
            paddingLeft: '29px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {options.map((item) => (
            <MenuItem value={item.value} key={item.text}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Выберите значение</FormHelperText>
      </FormControl>
    </div>
  );
};
