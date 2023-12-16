import React, { FC } from 'react';
import styles from './socialCarousel.module.scss';
import { SocialItem } from '../socialItem';
import { social } from './socialCarousel.constants';

export const SocialCarousel: FC = () => {
  return (
    <div className={styles.carousel}>
      {social.map((item, i) => (
        <SocialItem href={item.href} imgSrc={item.imgSrc} imgAlt={item.imgAlt} key={i}/>
      ))}
    </div>
  );
};
 