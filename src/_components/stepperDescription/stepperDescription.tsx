import React, { FC } from 'react';
import styles from './stepperDescription.module.scss';

interface Props {
  description: string[];
  timeText: string;
}

export const StepperDescription: FC<Props> = ({ description, timeText }) => {
  return (
    <div className={styles.wrapper}>
        <ul>
          { description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      <div>
        <img src='assets/icons/telegram.svg' alt='Clocks' />
        <span>{timeText}</span>
      </div>
    </div>
  );
};
