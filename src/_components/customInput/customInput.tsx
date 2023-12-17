import React, { FC } from 'react';
import styles from './customInput.module.scss';
import { TextField } from '@mui/material';

interface Props {
  title: string;
  placeholder: string;
}

export const CustomInput: FC<Props> = ({ title, placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <TextField
        id='filled-basic'
        label={placeholder}
        InputLabelProps={{
          sx: {
            paddingTop: '7px',
            paddingLeft: '16px'
          }
        }}
        variant='filled'
        fullWidth
      />
    </div>
  );
};
