import React, { FC } from 'react';
import styles from './socialCarousel.module.scss';
import { SocialItem } from '../socialItem';
import { social, socialColor } from './socialCarousel.constants';

interface Props {
  colored: boolean
}

export const SocialCarousel: FC<Props> = ({ colored }) => {
  return (
    <div className={styles.carousel}>
      {
        colored ? socialColor.map((item) => (
          <SocialItem href={item.href} imgSrc={item.imgSrc} imgAlt={item.imgAlt} key={item.imgSrc}/>
        ))
        :
        social.map((item) => (
          <SocialItem href={item.href} imgSrc={item.imgSrc} imgAlt={item.imgAlt} key={item.imgSrc}/>
        ))
      }
    </div>
  );
};
 