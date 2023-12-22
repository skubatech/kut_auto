import React, { FC } from 'react';
import styles from './price.module.scss';
import { PriceCards } from '../priceCards';
import cn from 'classnames';

export const Price: FC = () => {
  return (
    <div className={cn('container', styles.wrapper)}>
      <div className={styles.back}></div>
      <div className={styles.descriptionWrap}>
        <h5 className={styles.title}>стоимость услуг</h5>
        <span className={styles.text}>
          Узнайте по телефону
        </span>
      </div>
      <PriceCards />
    </div>
  );
};
