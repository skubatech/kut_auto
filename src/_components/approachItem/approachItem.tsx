import React, { FC } from 'react';
import styles from './approachItem.module.scss';

interface Props {
    imgSrc: string;
    imgAlt: string;
    title: string;
    text: string;
}

export const ApproachItem: FC<Props> = ({ imgSrc, imgAlt, title, text }) => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={styles.icon}>
        <img src={imgSrc} alt={imgAlt} />
        <span className={styles.title}>{title}</span>
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  );
};
