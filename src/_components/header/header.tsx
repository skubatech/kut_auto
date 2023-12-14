import React, { FC } from 'react';
import styles from './header.module.scss';
import { Button } from '../button';
import { SocialCarousel } from '../socialCarousel';

export const Header: FC = () => {
  return (
    <header className={`container ${styles.wrapper}`}>
      <section className={styles.top}>
        <span className={styles.location}>Москва</span>
        <img src='assets/icons/logo.svg' alt='Logo' loading='lazy' />
        <SocialCarousel />
      </section>
      <nav className={styles.low}>
        <ul className={styles.nav}>
            <li>Кейсы</li>
            <li>Услуги</li>
            <li>Калькулятор</li>
            <li>Вопросы</li>
            <Button 
                fontSize={27}
                fontWeight={400} 
                color={ true } 
                textTransform='none'
                text='Связаться с нами' />
        
        </ul>
      </nav>
    </header>
  );
};
