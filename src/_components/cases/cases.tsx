import React, { FC } from 'react';
import styles from './cases.module.scss';
import { Statistics } from '../statistics';

export const Cases: FC = () => {
  return (
    <div>
      <div className={`container ${styles.wrapper}`}>
        <h4 className={styles.title}>наши кейсы</h4>
      </div>
      <Statistics />
    </div>
  );
};
