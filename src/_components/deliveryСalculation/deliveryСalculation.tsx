import React, { useState } from 'react';
import styles from './deliveryСalculation.module.scss';
import { CustomSelect } from '../customSelect';
import { CustomInput } from '../customInput';
import { CustomRadio } from '../customRadio';
import { ButtonCustom } from '../button';
import { calculatorSum, values } from './deliveryCalculation.constants';
import { DialogCustom } from '../dialogCustom';

export const DeliveryCalculation = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <CustomSelect title='Возраст автомобиля' values={values} />
        <CustomInput
          title='Стоимость автомобиля'
          placeholder='Введите сумму брутто в евро'
        />
        <CustomRadio
          title='Наличие НДС'
          labelLeft='Только брутто'
          labelRight='Есть нетто'
        />
        <CustomRadio
          title='Тип двигателя'
          labelLeft='Бензин/дизель'
          labelRight='Электро'
        />
        <CustomInput
          title='Объем двигателя'
          placeholder='Введите сумму брутто в евро'
        />
        <ButtonCustom
          text='РАССЧИТАТЬ'
          textTransform='uppercase'
          fontSize={32}
          fontWeight={700}
          color
          onClick={handleClickOpen}
        />
      </div>
      <DialogCustom
        open={open}
        onClose={handleClose}
        sx={{
          padding: '80px',
          maxWidth: '1146px',
          borderRadius: '30px',
          border: '4px solid #19FB9B',
          boxShadow: '0px 0px 50px 5px rgba(184, 184, 184, 0.25)',
        }}
      >
        <div className={styles.dialogWrap}>
          <div className={styles.titleWrap}>
            <div />
            <span className={styles.title}>стоимость авто под ключ в</span>
            <button className={styles.btn} onClick={handleClose}>
              <img src='assets/icons/close.svg' alt='Icon' />
            </button>
          </div>
          <h5 className={styles.title}>Минске</h5>
          <span className={styles.price}>1186.96 €</span>
          <div className={styles.description}>
            <span className={styles.textUpper}>
              На выходе вы получаете готовый автомобиль в Минске.
            </span>
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
                <li key={item} className={styles.totalListItem}>
                  {item}
                </li>
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
    </>
  );
};
