import React, { FC, ReactNode } from 'react';
import styles from './dialogCustom.module.scss';
import Dialog from '@mui/material/Dialog';
import { SxProps } from '@mui/material';

interface Props {
  open: boolean,
  sx: SxProps,
  children: ReactNode,
  onClose: () => void,
}

export const DialogCustom: FC<Props> = ({ open, sx, children, onClose }) => {
  return (
    <div className={styles.wrapper}>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        PaperProps={{
          sx: sx 
        }}
      >
        {children}
        {/* <div className={styles.titleWrap}>
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
        </DialogContent> */}
      </Dialog>
    </div>
  );
};
