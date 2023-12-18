import React, { FC, useState } from 'react';
import styles from './header.module.scss';
import { ButtonCustom } from '../button';
import { SocialCarousel } from '../socialCarousel';
import { DialogCustom } from '../dialogCustom';
import cn from 'classnames';
import { DialogContent } from '@mui/material';
import { NavItem } from '../navItem';

interface Props {
  scrollTo: (num: number) => void;
}

export const Header: FC<Props> = ({ scrollTo }) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header className={cn('container', styles.wrapper)}>
      <section className={styles.top}>
        <span className={styles.location} onClick={handleClickOpen}>
          Москва
        </span>
        <img src='assets/icons/logo.svg' alt='Logo' loading='lazy' />
        <SocialCarousel colored={false} />
      </section>
      <nav className={styles.low}>
        <ul className={styles.nav}>

        <NavItem text='Кейсы' scrollTo={() => scrollTo(0)} />
        <NavItem text='Услуги' scrollTo={() => scrollTo(1)} />
        <NavItem text='Калькулятор' main={true} scrollTo={() => scrollTo(2)} />
        <NavItem text='Вопросы' scrollTo={() => scrollTo(4)} />
          <ButtonCustom
            fontSize={27}
            fontWeight={400}
            color={true}
            textTransform='none'
            text='Связаться с нами'
            onClick={() => scrollTo(3)}
          />
        </ul>
      </nav>
      <DialogCustom
        open={open}
        onClose={handleClose}
        sx={{
          padding: '60px',
          maxWidth: '1019px',
          borderRadius: '30px',
          border: '2px solid #19FB9B',
          display: 'flex',
          gap: '30px',
        }}
      >
        <div className={styles.titleWrap}>
          <h5 className={styles.title}>{'Выберете город доставки'}</h5>
          <button className={styles.btn} onClick={handleClose}>
            <img src='assets/icons/close.svg' alt='Icon' />
          </button>
        </div>
        <DialogContent className={styles.btnWrap}>
          <ButtonCustom
            text='Москва'
            textTransform='none'
            fontSize={24}
            fontWeight={500}
          />
          <ButtonCustom
            text='Нижний Новгород'
            textTransform='none'
            fontSize={24}
            fontWeight={500}
          />
          <ButtonCustom
            text='Минск'
            textTransform='none'
            fontSize={24}
            fontWeight={500}
          />
        </DialogContent>
      </DialogCustom>
    </header>
  );
};
