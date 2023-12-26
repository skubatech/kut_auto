import React, { FC } from 'react';
import styles from './priceCard.module.scss';
import { ButtonCustom } from '../button';

interface Props {
  title: string;
  description: string;
  text: string[];
  id: string;
  filledBtn?: boolean;
  scrollTo: (num: number) => void;
}

export const PriceCard: FC<Props> = ({
  title,
  description,
  text,
  id,
  filledBtn,
  scrollTo,
}) => {
  return (
    <div className={styles.wrapper} id={id}>
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
        fontWeight={700}
        isFilled={filledBtn}
        className={styles.button}
        onClick={() => scrollTo(3)}
      />
    </div>
  );
};
