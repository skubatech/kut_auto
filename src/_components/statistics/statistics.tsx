import React from 'react';
import styles from './statistics.module.scss';
import { StatisticsItem } from '../statisticsItem';
import { statistics } from './statistics.constants';
import cn from 'classnames';

export const Statistics = () => {
  return (
    <div className={cn('container', styles.wrapper)}>
      {statistics.map((item, i) => (
        <StatisticsItem info={item.info} text={item.text} key={i} />
      ))}
    </div>
  );
};
