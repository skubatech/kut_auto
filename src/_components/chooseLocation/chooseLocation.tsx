import React from 'react';
import { DialogCustom } from '../dialogCustom';
import styles from './chooseLocation.module.scss';
import { FC } from 'react';
import { DialogContent } from '@mui/material';
import { ButtonCustom } from '../button';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const ChooseLocation: FC<Props> = ({ open, onClose }) => {
  const changeLocation = (loc: string) => {
    localStorage.setItem('location', loc);
    window.dispatchEvent(new Event('storage'));
    onClose();
  };
  return (
    <DialogCustom
      open={open}
      onClose={onClose}
      sx={{
        padding: '60px',
        maxWidth: '1019px',
        borderRadius: '30px',
        border: '2px solid #19FB9B',
        boxShadow: '0px 0px 50px 5px rgba(184, 184, 184, 0.25)',
        display: 'flex',
        gap: '30px',
      }}
    >
      <div className={styles.titleWrap}>
        <h5 className={styles.title}>{'Выберете город доставки'}</h5>
        <button className={styles.btn} onClick={onClose}>
          <img src='assets/icons/close.svg' alt='Icon' />
        </button>
      </div>
      <DialogContent className={styles.btnWrap}>
        <ButtonCustom
          text='Москва'
          textTransform='none'
          fontSize={24}
          fontWeight={500}
          onClick={() => changeLocation('Москва')}
        />
        <ButtonCustom
          text='Нижний Новгород'
          textTransform='none'
          fontSize={24}
          fontWeight={500}
          onClick={() => changeLocation('Нижний Новгород')}
        />
        <ButtonCustom
          text='Минск'
          textTransform='none'
          fontSize={24}
          fontWeight={500}
          onClick={() => changeLocation('Минск')}
        />
      </DialogContent>
    </DialogCustom>
  );
};
