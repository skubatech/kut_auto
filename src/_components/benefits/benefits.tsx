import React, { FC } from 'react';
import styles from './benefits.module.scss';
import { BenefitsItem } from '../benefitsItem';

const benefits = [
  {
    title: 'безопасная сделка',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'assets/icons/document.svg',
  },
  {
    title: 'обратная связь',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'assets/icons/headphones.svg',
  },
  {
    title: 'честные отзывы',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: 'assets/icons/star.svg',
  },
];

export const Benefits: FC = () => {
  return (
    <div className={`container ${styles.wrapper}`}>
      {benefits.map((item, i) => (
        <BenefitsItem
          title={item.title}
          description={item.description}
          icon={item.icon}
          key={i}
        />
      ))}
    </div>
  );
};
