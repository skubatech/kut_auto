import React, { FC } from 'react';
import styles from './approach.module.scss';
import { ApproachItem } from '../approachItem';

const approach = [
  {
    imgSrc: 'assets/icons/document.svg',
    imgAlt: 'Clock icon',
    title: 'СРОКИ',
    text: 'Выезд специалиста на автомобиль в течение 30 минут',
  },
  {
    imgSrc: 'assets/icons/document.svg',
    imgAlt: 'Docs icon',
    title: 'ГАРАНТИИ',
    text: 'Гарантии на подобранные автомобили до 6 месяцев',
  },
  {
    imgSrc: 'assets/icons/document.svg',
    imgAlt: 'Dollar icon',
    title: 'ЭКОНОМИЯ',
    text: 'Торгуемся за вас, ищем лучшую цену на рынке',
  },
];

export const Approach: FC = () => {
  return (
    <div className={`container ${styles.wrapper}`}>
      {approach.map((item, i) => (
        <ApproachItem
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
          title={item.title}
          text={item.text}
          key={i}
        />
      ))}
    </div>
  );
};
