import React, { FC } from 'react';
import styles from './price.module.scss';
import { PriceCards } from '../priceCards';
import cn from 'classnames';

export const Price: FC = () => {
  return (
    <div className={cn('container', styles.wrapper)}>
      <div className={styles.back}></div>
      <div className={styles.descriptionWrap}>
        <h5 className={styles.title}>стоимость</h5>
        <span className={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Vitae vestibulum consequat
          odio.
        </span>
      </div>
      <PriceCards />
    </div>
  );
};
