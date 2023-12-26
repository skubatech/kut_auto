import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React, { FC } from 'react';
import styles from './customRadio.module.scss';

interface Props {
  id: string;
  value: string;
  title: string;
  labelLeft: string;
  labelRight: string;
  onChange: (fieldId: string, value: string) => void;
}

export const CustomRadio: FC<Props> = ({ id, value, title, labelLeft, labelRight, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <FormControl className={styles.formWrapper}>
        <RadioGroup
          aria-labelledby={`${id}-label`}
          defaultValue={value}
          name='radio-buttons-group'
          className={styles.radioGroup}
        >
          <FormControlLabel
            value={labelLeft}
            control={
              <Radio
                color='info'
                checkedIcon={<img src='assets/icons/radio.svg' alt='Icon' />}
                icon={<img src='assets/icons/circle.svg' alt='Icon' />}
                className={styles.radio}
              />
            }
            label={labelLeft}
            checked={value === labelLeft}
            className={styles.label}
            onChange={(event) =>
              onChange(id, (event.target as HTMLInputElement).value)
            }
          />
          <FormControlLabel
            value={labelRight}
            control={
              <Radio
                color='info'
                checkedIcon={<img src='assets/icons/radio.svg' alt='Icon' />}
                icon={<img src='assets/icons/circle.svg' alt='Icon' />}
                className={styles.radio}
              />
            }
            label={labelRight}
            className={styles.label}
            checked={value === labelRight}
            onChange={(event) =>
              onChange(id, (event.target as HTMLInputElement).value)
            }
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
