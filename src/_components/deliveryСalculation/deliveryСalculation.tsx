import React from 'react';
import styles from './deliveryСalculation.module.scss';
import { CustomSelect } from '../customSelect';
import { CustomInput } from '../customInput';
import { CustomRadio } from '../customRadio';
import { ButtonCustom } from '../button';
import { values } from './deliveryCalculation.constants';

export const DeliveryCalculation = () => {
  return (
      <div className={styles.wrapper}>
        <CustomSelect title='Возраст автомобиля' values={values}/>
        <CustomInput title='Стоимость автомобиля' placeholder='Введите сумму брутто в евро' />
        <CustomRadio title='Наличие НДС' labelLeft='Только брутто' labelRight='Есть нетто' />
        <CustomRadio title='Тип двигателя' labelLeft='Бензин/дизель' labelRight='Электро' />
        <CustomInput title='Объем двигателя' placeholder='Введите сумму брутто в евро' />
        <ButtonCustom text='РАССЧИТАТЬ' textTransform='uppercase' fontSize={32} fontWeight={700} color/>
      </div>
  );
};