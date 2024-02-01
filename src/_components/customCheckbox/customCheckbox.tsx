import {
    Checkbox,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from '@mui/material';
import React, { FC } from 'react';
import styles from './customCheckbox.module.scss';

interface Props {
  id: string;
  value: string;
  title: string;
  labelLeft: string;
  onChange: (fieldId: string, value: string) => void;
}

export const CustomCheckBox: FC<Props> = ({ id, value, title, labelLeft, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <FormControl className={styles.formWrapper}>
          <FormControlLabel
            value={labelLeft}
            control={
              <Checkbox
                  color='info'
                  checked={value === 'true'}
                  value={value}
                  className={styles.radio}
              />
            }
            label={labelLeft}
            checked={value === 'true'}
            className={styles.label}
            onChange={(event) => {
                console.log(!value)
                onChange(id, value === 'false' ? 'true': 'false')
            }
            }
          />
      </FormControl>
    </div>
  );
};
