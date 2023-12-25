import React, { FC } from 'react';
import styles from './price.module.scss';
import { PriceCards } from '../priceCards';
import cn from 'classnames';

interface Props {
  scrollTo: (num: number) => void;
}

export const Price: FC<Props> = ({ scrollTo }) => {
  return (
    <div className={cn('container', styles.wrapper)}>
      <div className={styles.back}></div>
      <div className={styles.descriptionWrap}>
        <h5 className={styles.title}>стоимость услуг</h5>
      </div>
      <PriceCards scrollTo={scrollTo}/>
    </div>
  );
};
