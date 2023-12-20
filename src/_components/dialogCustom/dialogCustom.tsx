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
      </Dialog>
    </div>
  );
};
