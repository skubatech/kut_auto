import React, { FC, useState } from 'react';
import styles from './customInput.module.scss';
import { TextField } from '@mui/material';

interface Props {
  title: string;
  placeholder: string;
  id: string;
  value: string;
  error: boolean;
  onChnage: (fieldId: string, value: string) => void;
}

export const CustomInput: FC<Props> = ({
  title,
  placeholder,
  id,
  value,
  error,
  onChnage,
}) => {
  const [errorChange, setErrorChange] = useState(false);
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <TextField
        onChange={(event) => {
          if ((Number(event.target.value) && event.target.value !== '') || event.target.value === '') {
            onChnage(event.target.id, event.target.value);
            setErrorChange(false);
          } else {
            setErrorChange(true);
          }
        }}
        id={id}
        label={placeholder}
        value={value}
        error={errorChange || error}
        helperText={(error || errorChange) && 'Введите числовое значение'}
        InputLabelProps={{
          sx: {
            paddingTop: '7px',
            paddingLeft: '16px',
          },
        }}
        variant='filled'
        fullWidth
      />
    </div>
  );
};
