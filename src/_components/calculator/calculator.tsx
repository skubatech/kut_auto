import React, { forwardRef, useState } from 'react';
import styles from './calculator.module.scss';
import { CalculatorExample } from '../calculatorExample/calculatorExample';
import { DeliveryCalculation } from '../deliveryСalculation/deliveryСalculation';
import cn from 'classnames';
import { DialogCustom } from '../dialogCustom';
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
      <h4 className={styles.title}>сколько стоит привезти ваш автомобиль</h4>
      <div className={styles.calculatorWrap}>
        <DeliveryCalculation />
        <CalculatorExample />
      </div>
      
    </div>
  );
});
