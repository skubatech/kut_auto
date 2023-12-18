import React, { forwardRef, useState } from 'react';
import styles from './calculator.module.scss';
import { CalculatorExample } from '../calculatorExample/calculatorExample';
import { DeliveryCalculation } from '../deliveryСalculation/deliveryСalculation';
import cn from 'classnames';
import { DialogCustom } from '../dialogCustom';
import { DialogContent } from '@mui/material';
import { ButtonCustom } from '../button/buttonCustom';
import { calculatorSum } from './calculator.constants';

export const Calculator = forwardRef<HTMLDivElement, object>((_, ref) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={cn('container', styles.wrapper)} ref={ref}>
      <div className={styles.back}></div>
      <h4 className={styles.title}>СКОЛЬКО СТОИТ ПРИВЕЗТИ ВАШ АВТОМОБИЛЬ</h4>
      <div className={styles.calculatorWrap}>
        <DeliveryCalculation handleClickOpen={handleClickOpen} />
        <CalculatorExample />
      </div>
      <DialogCustom
        open={open}
        onClose={handleClose}
        sx={{
          padding: '80px',
          maxWidth: '1019px',
          height: '1294px',
          borderRadius: '30px',
          border: '2px solid #19FB9B',
        }}
      >
        <div className={styles.dialogWrap}>
          <div className={styles.titleWrap}>
            <div />
            <span>СТОИМОСТЬ АВТО ПОД КЛЮЧ В</span>
            <button className={styles.btn} onClick={handleClose}>
              <img src='assets/icons/close.svg' alt='Icon' />
            </button>
          </div>
          <h5 className={styles.title}>МИНСКЕ</h5>
          <span className={styles.price}>1186.96 €</span>
          <div className={styles.description}>
            <span className={styles.textUpper}>На выходе вы получаете готовый автомобиль в Минске. </span>
            <span>
              Вам остается его поставить на учет в Беларуси или везти в другую
              страну для постановки на учет.
            </span>
          </div>
          <div className={styles.totalWrap}>
            <span className={styles.totalTitle}>
              Итого автомобиль выходит в Минске под ключ со всем перечнем услуг:
            </span>
            <ul>
              {calculatorSum.map((item) => (
                <li key={item} className={styles.totalListItem}>{item}</li>
              ))}
            </ul>
          </div>
          <ButtonCustom 
            text='СВЯЖИТЕСЬ С НАМИ'
            fontSize={32}
            fontWeight={700}
            textTransform='uppercase'
            color
          />
        </div>
      </DialogCustom>
    </div>
  );
});
