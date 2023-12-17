import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React, { FC } from 'react';
import styles from './customRadio.module.scss';

interface Props {
    title: string;
    labelLeft: string;
    labelRight: string;
}

export const CustomRadio: FC<Props> = ({title, labelLeft, labelRight}) => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.title}>{title}</span>
      <FormControl className={styles.formWrapper}>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'
        >
          <FormControlLabel
            value='female'
            control={
              <Radio
                color='info'
                checkedIcon={<img src='assets/icons/radio.svg' alt='Icon' />}
                icon={<img src='assets/icons/circle.svg'  alt='Icon'/>}
              />
            }
            label={labelLeft}
            checked={true}
          />
        </RadioGroup>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'
        >
          <FormControlLabel
            value='female'
            control={
              <Radio
                color='info'
                checkedIcon={<img src='assets/icons/radio.svg' alt='Icon'/>}
                icon={<img src='assets/icons/circle.svg' alt='Icon'/>}
              />
            }
            label={labelRight}
            checked={false}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
