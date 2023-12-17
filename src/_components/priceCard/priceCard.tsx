import React, { FC } from 'react';
import styles from './priceCard.module.scss';
import { ButtonCustom } from '../button';

interface Props {
    title: string;
    description: string;
    text: string;
}

export const PriceCard: FC<Props> = ({ title, description, text }) => {
  return (
    <div className={styles.wrapper}> 
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
        <span className={styles.text}>{text}</span>
        <ButtonCustom 
            textTransform='uppercase' 
            text='получить' 
            fontSize={32} 
            fontWeight={700}
        />
    </div>
  );
};
