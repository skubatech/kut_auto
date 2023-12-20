import React, { FC } from 'react';
import styles from './priceCards.module.scss';
import { PriceCard } from '../priceCard/priceCard';
import { cards } from './priceCards.constants';

export const PriceCards: FC = () => {
  return (
    <div className={styles.wrapper}>
      {cards.map((item, i) => (
        <PriceCard
          title={item.title}
          description={item.descrption}
          text={item.text}
          key={item.descrption}
          filledBtn={i === 1}
        />
      ))}
    </div>
  );
};
