import React, { FC } from 'react';
import styles from './calculatorExampleItem.module.scss';

interface Props {
    title: string;
    text: string
}

export const CalculatorExampleItem: FC<Props> = ({ title, text }) => {
  return (
      <div className={styles.wrapper}>
        <h5 className={styles.title}>{title}</h5>
        <span className={styles.text}>{text}</span>
      </div>
  );
};