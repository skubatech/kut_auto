import React, { FC } from 'react';
import styles from './calculatorExample.module.scss';
import { examples } from './calculatorExample.consants';
import { CalculatorExampleItem } from '../calculatorExampleItem';

export const CalculatorExample: FC = () => {
  return (
    <div className={styles.wrapper}>
      <iframe
        width='100%'
        height='427px'
        src='https://www.youtube.com/embed/Th3i2fyCxms?si=DhhKFfGVVIp66Bma&amp;controls=0'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
      {
        examples.map((item, i) => (
            <CalculatorExampleItem title={item.title} text={item.text} key={i}/>
        ))
      }
    </div>
  );
};
