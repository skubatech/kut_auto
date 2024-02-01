import React, { FC } from 'react';
import styles from './carouselBtn.module.scss';
import cn from 'classnames';
import { Cards } from '../priceCards/priceCards.constants';

interface Props {
  items: Cards[];
  active: number;
  onClick?: (index: number) => void;
}

export const CarouselBtn: FC<Props> = ({ items, active, onClick }) => {
  return (
    <div className={styles.btnCarouselWrap}>
      {items.map((item, i) => (
        <div
        key={item.title}
          className={cn(styles.btnCarousel, {
            [styles.active]: active === i,
          })}
          onClick={() => onClick(i)}
        ></div>
      ))}
    </div>
  );
};
