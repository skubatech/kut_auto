import React, { FC } from 'react';
import styles from './connect.module.scss';
import { ConnectItem } from '../connectItem';
import { SocialCarousel } from '../socialCarousel';
import { connectItems } from './connect.constants';

export const Connect: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.connectWrap}>
        {connectItems.map((item, i) => (
          <ConnectItem
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            url={item.url}
            text={item.text}
            key={i}
          />
        ))}
      </div>
      <div className={styles.social}>
        <span className={styles.title}>Социальные сети</span>
        <SocialCarousel colored/>
      </div>
    </div>
  );
};
