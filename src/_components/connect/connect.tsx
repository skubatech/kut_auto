import React, { useEffect, useState } from 'react';
import styles from './connect.module.scss';
import { ConnectItem } from '../connectItem';
import { SocialCarousel } from '../socialCarousel';
import { connectItemsMoscow, connectItemsMinsk, connectItemsNovgorod } from './connect.constants';

export const Connect = () => {
  const [location, setLocation] = useState(localStorage.getItem('location'));

  useEffect(() => {
    window.addEventListener('storage', () => {
      setLocation(localStorage.getItem('location'));
    });
  }, [])

  const getContacts = () => {
    switch(location) {
      case 'Москва':
        return connectItemsMoscow;
      case 'Нижний Новгород':
        return connectItemsNovgorod;
      case 'Минск':
        return connectItemsMinsk;

      default: 
        return connectItemsMoscow;
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.connectWrap}>
        {getContacts().map((item, i) => (
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
        <SocialCarousel colored className={styles.socialCarousel}/>
      </div>
    </div>
  );
};
