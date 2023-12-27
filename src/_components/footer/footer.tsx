import React, { FC } from 'react';
import styles from './footer.module.scss';
import { SocialCarousel } from '../socialCarousel';
import cn from 'classnames';

export const Footer = () => {
  return (
    <footer className={cn('container', styles.wrapper)}>
      <div className={styles.info}>
        <div className={styles.docs}>
        <a
            href="mailto:kut.auto.import@yandex.ru"
            className={styles.email}
          >
            mail@kut-auto.ru
          </a>
        </div>
        <div className={styles.social}>
          <SocialCarousel colored={false}/>
        </div>
      </div>

      <span className={styles.reserved}>2023 KUT. All right reserved.</span>
    </footer>
  );
};
