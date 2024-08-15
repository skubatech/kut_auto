import React, { forwardRef } from 'react';
import styles from './calculator.module.scss';
import { CalculatorExample } from '../calculatorExample/calculatorExample';
import { DeliveryCalculation } from '../deliveryСalculation/deliveryСalculation';
import cn from 'classnames';

interface Props {
    type: 'europe' | 'korea',
    scrollTo?: (num: number) => void
}

export const Calculator = forwardRef<HTMLDivElement, Props>(({ scrollTo, type }, ref) => {
  return (
    <div className={cn('container', styles.wrapper)}>
      <div className={styles.back}></div>
      <h4 className={styles.title}>сколько стоит привезти ваш автомобиль из <h4 className={`${type === 'europe' ? styles.europe : styles.korea}`}>{type === 'europe' ? 'европы' : 'южной кореи'}</h4></h4>
      <div className={styles.calculatorWrap}>
        <DeliveryCalculation scrollTo={scrollTo} ref={ref}/>
        <CalculatorExample type={type}/>
      </div>
    </div>
  );
});
