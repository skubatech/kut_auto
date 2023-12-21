import React, { useEffect, useState } from 'react';
import styles from './deliveryСalculation.module.scss';
import { CustomSelect } from '../customSelect';
import { CustomInput } from '../customInput';
import { CustomRadio } from '../customRadio';
import { ButtonCustom } from '../button';
import { calculatorSum, values } from './deliveryCalculation.constants';
import { DialogCustom } from '../dialogCustom';

export const DeliveryCalculation = () => {
  const [location, setLocation] = useState(localStorage.getItem('location'));
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    age: '',
    price: '',
    nds: 'Только брутто',
    engine: 'Бензин/дизель',
    volumeEngine: '',
  });
  const [error, setError] = useState(false);

  const handleClickOpen = () => {
    if (
      form.age !== '' &&
      form.price !== '' &&
      form.volumeEngine !== '' &&
      form.age !== ''
    ) {
      setError(false);
      console.log(form);
      setOpen(true);
    } else {
      setError(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeEndingCity = (attribute: 'in' | 'to') => {
    if (attribute === 'in') {
      switch (location) {
        case 'Москва':
          return 'Москве';
        case 'Нижний Новгород':
          return 'Нижнем Новгороде';
        case 'Минск':
          return 'Минске';
        default:
          return 'Москве';
      }
    }
    if (attribute === 'to') {
      switch (location) {
        case 'Москва':
          return 'Москвы';
        case 'Нижний Новгород':
          return 'Нижнего Новгорода';
        case 'Минск':
          return 'Минска';
        default:
          return 'Москвы';
      }
    }
  };

  const changeCountry = () => {
    switch (location) {
      case 'Москва':
        return 'России';
      case 'Нижний Новгород':
        return 'России';
      case 'Минск':
        return 'РБ';
      default:
        return 'России';
    }
  };

  const onChange = (fieldId: string, value: string) => {
    setForm({
      ...form,
      [fieldId]: value,
    });
  };

  const changeArray = () => {
    const newCalculatorSum = calculatorSum.map((item, i, arr) => {
      if (i === arr.length - 2) {
        console.log(`${item} ${changeEndingCity('to')}.`);
        item = `${item} ${changeEndingCity('to')}.`;
      }
      return item;
    });
    if (location !== 'Минск') {
      return newCalculatorSum;
    } else {
      return newCalculatorSum.slice(0, calculatorSum.length - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('storage', () => {
      setLocation(localStorage.getItem('location'));
    });
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <CustomSelect
          id='age'
          title='Возраст автомобиля'
          options={values}
          value={form.age}
          error={form.age === '' && error}
          onChange={onChange}
        />
        <CustomInput
          title='Стоимость автомобиля'
          placeholder='Введите сумму брутто в евро'
          id='price'
          value={form.price}
          error={form.price === '' && error}
          onChnage={onChange}
        />
        <CustomRadio
          title='Наличие НДС'
          labelLeft='Только брутто'
          labelRight='Есть нетто'
          id='nds'
          value={form.nds}
          onChange={onChange}
        />
        <CustomRadio
          title='Тип двигателя'
          labelLeft='Бензин/дизель'
          labelRight='Электро'
          id='engine'
          value={form.engine}
          onChange={onChange}
        />
        <CustomInput
          id='volumeEngine'
          value={form.volumeEngine}
          title='Объем двигателя'
          placeholder='См 3'
          error={form.volumeEngine === '' && error}
          onChnage={onChange}
        />
        <ButtonCustom
          text='рассчитать'
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
          <h5 className={styles.title}>{changeEndingCity('in')}</h5>
          <span className={styles.price}>1186.96 €</span>
          <div className={styles.description}>
            <span className={styles.textUpper}>
              {`На выходе вы получаете готовый автомобиль в ${changeEndingCity(
                'in'
              )}.`}
            </span>
            <span>
              {`Вам остается его поставить на учет в ${changeCountry()} или везти в другую
              страну для постановки на учет.`}
            </span>
          </div>
          <div className={styles.totalWrap}>
            <span className={styles.totalTitle}>
              {`Итого автомобиль выходит в ${changeEndingCity(
                'in'
              )} под ключ со всем перечнем услуг:`}
            </span>
            <ul>
              {changeArray().map((item) => {
                return (
                  <li key={item} className={styles.totalListItem}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <ButtonCustom
            text='свяжитесь с нами'
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
