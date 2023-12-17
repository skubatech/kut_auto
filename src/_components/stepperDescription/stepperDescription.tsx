import React, { FC } from 'react';
import styles from './stepperDescription.module.scss';

interface Props {
  description: string[];
  timeText: string;
}

export const StepperDescription: FC<Props> = ({ description, timeText }) => {
  return (
    <div className={styles.wrapper}>
        <ul className={styles.list}>
          { description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      <div className={styles.timeWrap}>
        <img src='assets/icons/clock.svg' alt='Clocks' />
        <span>{timeText}</span>
      </div>
    </div>
  );
};
