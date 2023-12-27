import React, { FC, useState } from 'react';
import styles from './priceCards.module.scss';
import { PriceCard } from '../priceCard/priceCard';
import { cards } from './priceCards.constants';
import { CarouselBtn } from '../carouselBtn';
import { useMediaQuery, useTheme } from '@mui/material';

interface Props {
  scrollTo: (num: number) => void;
}

export const PriceCards: FC<Props> = ({ scrollTo }) => {
  const theme = useTheme();
  const currentBreakpoints = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  const [activeIndex, setActiveIndex] = useState(currentBreakpoints ? 1 : 0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= cards.length) {
      newIndex = cards.length - 1;
    }

    setActiveIndex(newIndex);
  };
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    console.log(e.target.type)
    if (e.target.type === '') {
      if (touchStart - touchEnd > 100) {
        return updateIndex(activeIndex + 1);
      }
  
      if (touchStart - touchEnd < 100) {
        return updateIndex(activeIndex - 1);
      }
    }
  };

  return (
    <div className={styles.wrap}>
      <div
        className={styles.wrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: currentBreakpoints ? `translate(-${activeIndex * 100}%)` : '',
        }}
      >
        {cards.map((item, i) => (
          <PriceCard
            title={item.title}
            description={item.descrption}
            text={item.text}
            key={item.descrption}
            id={`slide${i + 1}`}
            filledBtn={i === 1}
            scrollTo={scrollTo}
          />
        ))}
      </div>
      <CarouselBtn active={activeIndex} items={cards} onClick={updateIndex} />
    </div>
  );
};
