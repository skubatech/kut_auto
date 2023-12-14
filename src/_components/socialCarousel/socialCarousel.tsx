import React, { FC } from 'react';
import styles from './socialCarousel.module.scss';
import { SocialItem } from '../socialItem';

const social = [
  {
    href: 'https://www.youtube.com/',
    imgSrc: 'assets/icons/youtube.svg',
    imgAlt: 'Youtube',
  },
  {
    href: 'https://web.telegram.org/k/',
    imgSrc: 'assets/icons/telegram.svg',
    imgAlt: 'Telegram',
  },
  {
    href: 'https://www.instagram.com/',
    imgSrc: 'assets/icons/instagram.svg',
    imgAlt: 'Instagram',
  },
  {
    href: 'https://vk.com/',
    imgSrc: 'assets/icons/vk.svg',
    imgAlt: 'VK',
  },
];

export const SocialCarousel: FC = () => {
  return (
    <div className={styles.carousel}>
      {social.map((item, i) => (
        <SocialItem href={item.href} imgSrc={item.imgSrc} imgAlt={item.imgAlt} key={i}/>
      ))}
    </div>
  );
};
