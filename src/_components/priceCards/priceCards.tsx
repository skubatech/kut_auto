import React, { FC } from 'react';
import styles from './priceCards.module.scss';
import { PriceCard } from '../priceCard/priceCard';
import { cards } from './priceCards.constants';

interface Props {
  scrollTo: (num: number) => void;
}

export const PriceCards: FC<Props> = ({ scrollTo }) => {
  return (
    <div className={styles.wrapper}>
      {cards.map((item, i) => (
        <PriceCard
          title={item.title}
          description={item.descrption}
          text={item.text}
          key={item.descrption}
          filledBtn={i === 1}
          scrollTo={scrollTo}
        />
      ))}
    </div>
  );
};
