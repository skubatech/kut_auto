import React, { FC } from 'react';
import styles from './diagnosisDesItem.module.scss';

interface Props {
  imgSrc: string;
  imgAlt: string;
  title: string;
  text: string;
  id: string;
  onMouseEnter: (e) => void;
  onMouseLeave: () => void;
}

export const DiagnosisDesItem: FC<Props> = ({
  imgSrc,
  imgAlt,
  title,
  text,
  id,
  onMouseEnter, 
  onMouseLeave
}) => {
  return (
    <div className={styles.wrapper} id={id} onMouseEnter={() => onMouseEnter(id)} onMouseLeave={onMouseLeave}>
      <img src={imgSrc} alt={imgAlt} />
      <div className={styles.outer}>
        <div className={styles.back}>
          <div className={styles.inner}>
            <div className={styles.description}>
              <span className={styles.title}>{title}</span>
              <span className={styles.text}>{text}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
