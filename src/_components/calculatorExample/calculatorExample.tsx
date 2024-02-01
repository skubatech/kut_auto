import React, { FC } from 'react';
import styles from './calculatorExample.module.scss';

export const CalculatorExample: FC = () => {
  return (
    <div className={styles.wrapper}>
      <video
      className={styles.video}
      src='assets/result.mp4'
      controls
      poster='assets/preview.png'
      ></video>
    </div>
  );
};
