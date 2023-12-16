import React, { FC } from 'react';
import styles from './deliveryСalculation.module.scss';
import { CustomSelect } from '../customSelect';
import { CustomInput } from '../customInput';
import { CustomRadio } from '../customRadio';

export const DeliveryCalculation: FC = () => {
  return (
      <div className={styles.wrapper}>
        <CustomSelect />
        <CustomInput />
        <CustomRadio />
      </div>
  );
};