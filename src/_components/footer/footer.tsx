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
          {/* <span className={styles.requisites}>ип "название"</span>
          <span className={styles.requisites}>инн 621613161653</span>
          <span className={styles.requisites}>огрн 532523563125631</span> */}
        </div>
        <div className={styles.social}>
          <SocialCarousel colored={false}/>
          {/* <a
            href="mailto:kut.auto.import@yandex.ru"
            className={styles.email}
          >
            mail@kut-auto.ru
          </a> */}
        </div>
      </div>

      <span className={styles.reserved}>2023 KUT. All right reserved.</span>
    </footer>
  );
};
