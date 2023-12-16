import React, { FC } from 'react';
import styles from './approach.module.scss';
import { ApproachItem } from '../approachItem';
import { approach } from './approach.constants';

export const Approach: FC = () => {
  return (
    <div className={`${styles.wrapper}`}>
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
