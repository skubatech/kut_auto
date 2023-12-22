import React, { forwardRef } from 'react';
import styles from './calculator.module.scss';
import { CalculatorExample } from '../calculatorExample/calculatorExample';
import { DeliveryCalculation } from '../deliveryСalculation/deliveryСalculation';
import cn from 'classnames';

interface Props {
  scrollTo: (num: number) => void
}

export const Calculator = forwardRef<HTMLDivElement, Props>(({ scrollTo }, ref) => {
  return (
    <div className={cn('container', styles.wrapper)} ref={ref}>
      <div className={styles.back}></div>
      <h4 className={styles.title}>сколько стоит привезти ваш автомобиль</h4>
      <div className={styles.calculatorWrap}>
        <DeliveryCalculation scrollTo={scrollTo}/>
        <CalculatorExample />
      </div>
    </div>
  );
});
