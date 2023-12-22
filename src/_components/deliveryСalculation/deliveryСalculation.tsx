import React, { FC, useEffect, useState } from 'react';
import styles from './deliveryСalculation.module.scss';
import { CustomSelect } from '../customSelect';
import { CustomInput } from '../customInput';
import { CustomRadio } from '../customRadio';
import { ButtonCustom } from '../button';
import { calculatorSum, values } from './deliveryCalculation.constants';
import { DialogCustom } from '../dialogCustom';

interface Props {
  scrollTo: (num: number) => void;
}

export const DeliveryCalculation: FC<Props> = ({ scrollTo }) => {
  const [finalCarPrice, setFinalCarPrice] = useState(0);
  const [res, setRes] = useState(0);
  const [sbor, setSbor] = useState(0);

  const fullCarPrice = (fullCustom, price) => {
    let expenses = 1000;
    let carExpenses = 0;

    if (price <= 25000) {
      carExpenses = price * 0.12 + expenses + fullCustom;
    } else if (price > 25000 && price <= 35000) {
      carExpenses = price * 0.112 + expenses + fullCustom;
    } else if (price > 35000 && price <= 45000) {
      carExpenses = price * 0.115 + expenses + fullCustom;
    } else if (price > 45000 && price <= 55000) {
      carExpenses = price * 0.12 + expenses + fullCustom;
    } else if (price > 55000 && price <= 65000) {
      carExpenses = price * 0.11 + expenses + fullCustom;
    } else if (price > 65000 && price <= 75000) {
      carExpenses = price * 0.12 + expenses + fullCustom;
    } else if (price > 75000) {
      carExpenses = price * 0.105 + expenses + fullCustom;
    }

    const nds = location !== 'Минск' ? 2000 : 1000;

    if (form.nds === 'Только брутто') {
      setFinalCarPrice(Number(carExpenses) + Number(price) + nds);
    } else {
      setFinalCarPrice(Number(carExpenses) + Number(price) * 0.84 + nds);
    }
  };

  function customCalculations(res, capacity) {
    let fullCustom;
    if (parseInt(form.age, 10) < 3) {
      fullCustom = res;
    } else {
      if (capacity <= 2500) {
        fullCustom = Number(res) + 1500;
      } else {
        fullCustom = Number(res) + 1800;
      }
    }
    fullCarPrice(fullCustom, parseInt(form.price, 10));
  }

  function checkFunc(age, price, capacity, engine) {
    if (engine === 'Электро') {
      formula(0, 0);
    } else {
      naturalPerson(age, price, capacity);
    }
  }

  function formula(cap, euro) {
    setRes((cap * euro) / 2);
    customCalculations(res, cap);

    return res;
  }

  function naturalPerson(age, price, capacity) {
    if (age < 3) {
      setRes(price * 0.4);
      customCalculations(res, capacity);
      return res;
    } else if (age >= 3 && age <= 5) {
      if (capacity <= 1000) {
        formula(capacity, 1.5);
      } else if (capacity > 1001 && capacity <= 1500) {
        formula(capacity, 1.7);
      } else if (capacity > 1501 && capacity <= 1800) {
        formula(capacity, 2.5);
      } else if (capacity > 1801 && capacity <= 2300) {
        formula(capacity, 2.7);
      } else if (capacity > 2301 && capacity <= 3000) {
        formula(capacity, 3);
      } else if (capacity > 3001) {
        formula(capacity, 3.6);
      }
    } else if (age > 5) {
      if (capacity <= 1000) {
        formula(capacity, 3);
      } else if (capacity > 1001 && capacity <= 1500) {
        formula(capacity, 3.2);
      } else if (capacity > 1501 && capacity <= 1800) {
        formula(capacity, 3.5);
      } else if (capacity > 1801 && capacity <= 2300) {
        formula(capacity, 4.8);
      } else if (capacity > 2301 && capacity <= 3000) {
        formula(capacity, 5);
      } else if (capacity > 3001) {
        formula(capacity, 5.7);
      }
    }
  }

  function utilSbor(age, type) {
    if (age < 3) {
      return setSbor(544.5);
    } else if (age >= 3 && age <= 7) {
      return setSbor(816.7);
    } else if (age > 7) {
      return type === 'electro' ? setSbor(816.7) : setSbor(1225.1);
    }
  }

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
      checkFunc(form.age, form.price, form.volumeEngine, form.engine);
      utilSbor(form.age, form.engine);
      setOpen(true);
    } else {
      setError(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!open) {
      setFinalCarPrice(0);
      setRes(0);
      setSbor(0);
    }
  }, [open]);

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
          <span className={styles.price}>{finalCarPrice.toFixed(2)} €</span>
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
            text='связаться с нами'
            fontSize={32}
            fontWeight={700}
            textTransform='uppercase'
            color
            onClick={() => {
              handleClose();
              scrollTo(3);
            }}
          />
        </div>
      </DialogCustom>
    </>
  );
};
