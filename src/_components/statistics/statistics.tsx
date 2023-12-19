import React, { forwardRef } from 'react';
import styles from './statistics.module.scss';
import { StatisticsItem } from '../statisticsItem';
import { statistics } from './statistics.constants';
import cn from 'classnames';

export const Statistics = forwardRef<HTMLDivElement, object>((_, ref) => {
  
    return (
      <div className={cn('container', styles.wrapper)}>
        <div ref={ref} className={styles.statisticsWrap}>
        {statistics.map((item, i) => (
          <StatisticsItem info={item.info} text={item.text} key={i}/>
        ))}
        </div>
        
      </div>
    );
  })
