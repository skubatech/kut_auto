import React, { FC, useEffect, useState } from 'react';
import styles from './header.module.scss';
import { ButtonCustom } from '../button';
import { SocialCarousel } from '../socialCarousel';
import cn from 'classnames';
import { NavItem } from '../navItem';
import { ChooseLocation } from '../chooseLocation';
import gsap from 'gsap';

interface Props {
  scrollTo: (num: number) => void;
}

export const Header: FC<Props> = ({ scrollTo }) => {
  const [location, setLocation] = useState(localStorage.getItem('location'));
  const [open, setOpen] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);

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

  const openBurgerMenu = () => {
    setOpenBurger(true);
  }

  const closeBurgerMenu = () => {
    setOpenBurger(false);
  }

  useEffect(() => {
    gsap.fromTo(
      '#burger',
      { x: 0, y: -20 },
      { x: 0, y: 10, duration: .5 }
    )
  }, [openBurger]);

  return (
    <header className={cn('container', styles.wrapper)}>
      <section className={styles.top}>
        <span className={styles.location} onClick={handleClickOpen}>
          {location ?? 'Москва'}
        </span>
        <img src='assets/icons/logo.svg' alt='Logo' loading='lazy' className={ styles.logo } />
        <SocialCarousel colored={false} className={styles.social} />
      </section>
      <nav className={styles.low}>
        <ul className={cn(styles.nav, { [styles.burgerNav]: openBurger })} id="burger">
          <NavItem text='Кейсы' scrollTo={() => scrollTo(0)} />
          <NavItem text='Услуги' scrollTo={() => scrollTo(1)} />
          <NavItem
            text='Калькулятор'
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
          <SocialCarousel colored={false} className={cn(styles.social, styles.socialBurger)} />
        </ul>
        <img
          src={
            openBurger
              ? 'assets/icons/closeBurger.png'
              : 'assets/icons/burger.png'
            }
            alt='menu icon'
            className={styles.burger}
            onClick={
              openBurger
                ? closeBurgerMenu
                : openBurgerMenu
            }
        />
      </nav>
      <ChooseLocation open={open} onClose={handleClose}/>
    </header>
  );
};
