import React, { FC, useEffect, useState } from 'react';
import styles from './header.module.scss';
import { ButtonCustom } from '../button';
import { SocialCarousel } from '../socialCarousel';
import cn from 'classnames';
import { NavItem } from '../navItem';
import { ChooseLocation } from '../chooseLocation';

interface Props {
  scrollTo: (num: number) => void;
}

export const Header: FC<Props> = ({ scrollTo }) => {
  const [location, setLocation] = useState(localStorage.getItem('location'));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener('storage', () => {
      setLocation(localStorage.getItem('location'));
    });
  }, []);


  return (
    <header className={cn('container', styles.wrapper)}>
      <section className={styles.top}>
        <span className={styles.location} onClick={handleClickOpen}>
          {location ?? 'Москва'}
        </span>
        <img src='assets/icons/logo.svg' alt='Logo' loading='lazy' />
        <SocialCarousel colored={false} />
      </section>
      <nav className={styles.low}>
        <ul className={styles.nav}>
          <NavItem text='Кейсы' scrollTo={() => scrollTo(0)} />
          <NavItem text='Услуги' scrollTo={() => scrollTo(1)} />
          <NavItem
            text='Калькулятор'
            main={true}
            scrollTo={() => scrollTo(2)}
          />
          <NavItem text='Вопросы' scrollTo={() => scrollTo(4)} />
          <ButtonCustom
            fontWeight={400}
            color={true}
            textTransform='none'
            text='Контакты'
            className={styles.btn}
            onClick={() => scrollTo(3)}
          />
        </ul>
      </nav>
      <ChooseLocation open={open} onClose={handleClose}/>
    </header>
  );
};
