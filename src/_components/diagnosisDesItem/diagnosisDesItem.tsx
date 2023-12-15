import React, { FC } from 'react';
import styles from './diagnosisDesItem.module.scss';

interface Props {
  imgSrc: string;
  imgAlt: string;
  title: string;
  text: string;
}

export const DiagnosisDesItem: FC<Props> = ({
  imgSrc,
  imgAlt,
  title,
  text,
}) => {
  return (
    <div className={styles.wrapper}>
      <img src={imgSrc} alt={imgAlt} />
      <div className={styles.description}>
        <span className={styles.title}>{title}</span>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
};
