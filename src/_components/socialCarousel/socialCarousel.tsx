import React, { FC } from 'react';
import styles from './socialCarousel.module.scss';
import { SocialItem } from '../socialItem';
import { social, socialColor } from './socialCarousel.constants';
import cn from 'classnames';

interface Props {
  colored: boolean;
  className?: string;
}

export const SocialCarousel: FC<Props> = ({ colored, className }) => {
  return (
    <div className={cn(styles.carousel, className)}>
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
 