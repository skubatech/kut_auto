import React, { FC } from 'react';
import styles from './connect.module.scss';
import { ConnectItem } from '../connectItem';
import { SocialCarousel } from '../socialCarousel';

const connectItems = [
  {
    imgSrc: 'assets/icons/connectTelegram.svg',
    imgAlt: 'Telegram',
    url: 'https://web.telegram.org/k/',
    text: 'Свяжитесь с нами в телеграм',
  },
  {
    imgSrc: 'assets/icons/connectWhatsapp.svg',
    imgAlt: 'Whatsapp',
    url: '',
    text: 'Напишите нашему менеджеру',
  },
  {
    imgSrc: 'assets/icons/connectPhone.svg',
    imgAlt: 'Phone',
    url: 'tel:+7-961-111-05-01',
    text: '+7 (961)-111-05-01',
  },
];

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
        <SocialCarousel />
      </div>
    </div>
  );
};
