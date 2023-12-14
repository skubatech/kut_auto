import React, { FC } from 'react';
import styles from './footer.module.scss';
import { SocialCarousel } from '../socialCarousel';

export const Footer: FC = () => {
  return (
    <footer className={`container ${styles.wrapper}`}>
      <div className={styles.info}>
        <div className={styles.docs}>
          <span className={styles.requisites}>ип "название"</span>
          <span className={styles.requisites}>инн 621613161653</span>
          <span className={styles.requisites}>огрн 532523563125631</span>
        </div>
        <div className={styles.social}>
          <SocialCarousel />
          <a
            href="mailto:kut.auto.import@yandex.ru"
            className={styles.email}
          >
            kut.auto.import@yandex.ru
          </a>
        </div>
      </div>

      <span className={styles.reserved}>2023 KUT. All right reserved.</span>
    </footer>
  );
};
