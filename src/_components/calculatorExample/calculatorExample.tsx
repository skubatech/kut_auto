import React, { FC } from 'react';
import styles from './calculatorExample.module.scss';

export const CalculatorExample: FC = () => {
  return (
    <div className={styles.wrapper}>
      <iframe
      className={styles.video}
        src='https://www.youtube.com/embed/Th3i2fyCxms?si=DhhKFfGVVIp66Bma&amp;controls=0'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  );
};
