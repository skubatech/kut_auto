import {DialogContent} from '@mui/material';
import {ButtonCustom} from '@/_components/button';
import React, {FC} from 'react';
import {DialogCustom} from '../dialogCustom';
import styles from './calculationLoading.module.scss';

interface Props {
    open: boolean;
    onClose: () => void;
}

export const CalculationLoading: FC<Props> = ({open, onClose}) => {
    return (
        <DialogCustom
            open={open}
            onClose={onClose}
            sx={{
                padding: {
                    sm: '24px',
                    md: '32px',
                    lg: '48px',
                },
                maxWidth: '1019px',
                borderRadius: '20px',
                border: '2px solid #19FB9B',
                boxShadow: '0px 0px 50px 5px rgba(184, 184, 184, 0.25)',
                display: 'flex',
                gap: '36px'
            }}
        >
            <div className={styles.wrapper}>
                <button className={styles.btn} onClick={onClose}>
                    <img src="assets/icons/close.svg" alt="Icon"/>
                </button>
            </div>
            <DialogContent
                className={styles.content}
                sx={{padding: '0'}}
            >
                <img src='assets/icons/logo.svg' alt='Logo' className={styles.icon} />
                <h4 className={styles.title}>Осуществляем расчет</h4>
                <span className={styles.text}>Примерное время ожидания <b>30 секунд</b></span>
            </DialogContent>
        </DialogCustom>
    );
};