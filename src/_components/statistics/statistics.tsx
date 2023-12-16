import React, { FC } from 'react';
import styles from './statistics.module.scss';
import { StatisticsItem } from '../statisticsItem';
import { statistics } from './statistics.constants';

export const Statistics: FC = () => {
  return (
    <div className={`container ${styles.wrapper}`}>
      {statistics.map((item, i) => (
        <StatisticsItem info={item.info} text={item.text} key={i} />
      ))}
    </div>
  );
};
