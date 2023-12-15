import React, { FC } from 'react';
import styles from './price.module.scss';
import { PriceCards } from '../priceCards';

export const Price: FC = () => {
  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.descriptionWrap}>
        <h5 className={styles.title}>СТОИМОСТЬ</h5>
        <span className={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Vitae vestibulum consequat
          odio.
        </span>
      </div>

      <PriceCards />
    </div>
  );
};
