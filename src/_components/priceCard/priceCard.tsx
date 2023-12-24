import React, { FC } from 'react';
import styles from './priceCard.module.scss';
import { ButtonCustom } from '../button';

interface Props {
  title: string;
  description: string;
  text: string[];
  filledBtn?: boolean;
}

export const PriceCard: FC<Props> = ({
  title,
  description,
  text,
  filledBtn,
}) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
      <ul className={styles.list}>
      {text.map((item) => (
        <li className={styles.text}>{item}</li>
      ))}
      </ul>
      <ButtonCustom
        textTransform='uppercase'
        text='получить'
        fontSize={32}
        fontWeight={700}
        isFilled={filledBtn}
      />
    </div>
  );
};
