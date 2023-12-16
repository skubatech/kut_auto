import React, { FC } from 'react';
import styles from './calculator.module.scss';
import { CalculatorExample } from '../calculatorExample/calculatorExample';
import { DeliveryCalculation } from '../deliveryСalculation/deliveryСalculation';

export const Calculator: FC = () => {
  return (
      <div className={`container ${styles.wrapper}`}>
        <h4 className={styles.title}>СКОЛЬКО СТОИТ ПРИВЕЗТИ ВАШ АВТОМОБИЛЬ</h4>
        <div className={styles.calculatorWrap}>
            <DeliveryCalculation />
            <CalculatorExample />
            
        </div>
      </div>
  );
};
