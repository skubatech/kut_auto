import React, { FC, forwardRef } from 'react';
import styles from './calculator.module.scss';
import { CalculatorExample } from '../calculatorExample/calculatorExample';
import { DeliveryCalculation } from '../deliveryСalculation/deliveryСalculation';
import cn from 'classnames';

export const Calculator = forwardRef<HTMLDivElement, object>((_, ref) => {
  return (
      <div className={cn('container', styles.wrapper)} ref={ref}>
        <h4 className={styles.title}>СКОЛЬКО СТОИТ ПРИВЕЗТИ ВАШ АВТОМОБИЛЬ</h4>
        <div className={styles.calculatorWrap}>
            <DeliveryCalculation />
            <CalculatorExample />
        </div>
      </div>
  );
});
