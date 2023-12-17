import React, { FC, useState } from 'react';
import styles from './header.module.scss';
import { ButtonCustom } from '../button';
import { SocialCarousel } from '../socialCarousel';
import { DialogCustom } from '../dialogCustom';
import cn from 'classnames';

interface Props {
  scrollTo: (num: number) => void
}

export const Header: FC<Props> = ({scrollTo}) => {
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
        <span className={styles.location} onClick={handleClickOpen}>Москва</span>
        <img src='assets/icons/logo.svg' alt='Logo' loading='lazy' />
        <SocialCarousel colored={false}/>
      </section>
      <nav className={styles.low}>
        <ul className={styles.nav}>
            <li onClick={() => scrollTo(0)}>Кейсы</li>
            <li onClick={() => scrollTo(1)}>Услуги</li>
            <li id={styles.main} onClick={() => scrollTo(2)}>Калькулятор</li>
            <li onClick={() => scrollTo(4)}>Вопросы</li>
            <ButtonCustom 
                fontSize={27}
                fontWeight={400} 
                color={ true } 
                textTransform='none'
                text='Связаться с нами' 
                onClick={() => scrollTo(3)}
                />
        </ul>
      </nav>
      <DialogCustom open={open} onClose={handleClose}/>
    </header>
  );
};
