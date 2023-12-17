import React, { FC, useState } from 'react';
import styles from './dialogCustom.module.scss';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { ButtonCustom } from '../button/buttonCustom';

interface Props {
  open: boolean,
  onClose: () => void,

}

export const DialogCustom: FC<Props> = ({ open, onClose }) => {
  return (
    <div className={styles.wrapper}>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        className={styles.dialogWrap}
        PaperProps={{
          sx: {
            padding: '60px',
            maxWidth: '1019px',
            borderRadius: '30px',
            border: '2px solid #19FB9B',
            display: 'flex',
            gap: '30px'
          } 
        }}
      >
        <div className={styles.titleWrap}>
          <h5 className={styles.title}>{'Выберете город доставки'}</h5>
          <button className={styles.btn} onClick={onClose}>
            <img src='assets/icons/close.svg' alt='Icon'/>
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
      </Dialog>
    </div>
  );
};
