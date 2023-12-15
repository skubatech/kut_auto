import React, { FC } from 'react';
import styles from './ourApproach.module.scss';
import { Approach } from '../approach';
import { DiagnosisDes } from '../diagnosisDes';
import { Description } from '../description';

const diagnosisDesLeft = [
  {
    imgSrc: 'assets/icons/engine.svg',
    imgAlt: 'Icon engine',
    title: 'двигатель',
    text: 'Проверка состояния двигателя. проверка уровня жидкостей, компьютерная диагностика. Эндоскопия.',
  },
  {
    imgSrc: 'assets/icons/gearbox.svg',
    imgAlt: 'Icon gearbox',
    title: 'коробка передач',
    text: 'Проверка на наличие неисправностей в электронном блоке управления. Физический осмотр.',
  },
  {
    imgSrc: 'assets/icons/body.svg',
    imgAlt: 'Icon body',
    title: 'кузов',
    text: 'Проверка кузова на предмет перекраса, ремонта, снятия-установки элементов.',
  },
];

const diagnosisDesRight = [
  {
    imgSrc: 'assets/icons/treaty.svg',
    imgAlt: 'Icon treaty',
    title: 'юр. чистота',
    text: 'Сверка идентификационных номеров. Проверка по базам ГАИ и залогам',
  },
  {
    imgSrc: 'assets/icons/inlet.svg',
    imgAlt: 'Icon inlet',
    title: 'впуск',
    text: 'Проверка нейтрализатора выхлопных газов в автомобилях с нормами токсичности Евро - 3 и выше.',
  },
  {
    imgSrc: 'assets/icons/suspension.svg',
    imgAlt: 'Icon suspension',
    title: 'подвеска',
    text: 'Проверка амортизаторов, стабилизаторов, приводных валов, тормозной системы, подшипников, ступицы, верхних и нижних рычагов.',
  },
];

export const OurApproach: FC = () => {
  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.titleWrap}>
        <img className={ styles.car } src="assets/icons/approachCar.png" />
        <h4 className={styles.title}>наш подход</h4>
          <span className={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Vitae vestibulum consequat
            odio nisl vestibulum eget fermentum aenean imperdiet. Condimentum
            aliquet tellus tincidunt vehicula pellentesque. Pellentesque sed ut
            in orci neque porttitor in. Habitant nisl cursus tellus libero at
            nibh.
          </span>
      </div>
      <div className={styles.stateWrap}>
        <h5 className={styles.stateTitle}>
          ОТКРЫВАЕМ ГЛАЗА НА РЕАЛЬНОЕ СОСТОЯНИЕ АВТОМОБИЛЯ
        </h5>
        <span className={styles.stateText}>
          Lorem ipsum dolor sit amet consectetur. Vitae vestibulum consequat
          odio nisl vestibulum eget fermentum aenean imperdiet. Condimentum
          aliquet tellus tincidunt vehicula{' '}
        </span>
        <Approach />
      </div>
      <div className={styles.diagnosisWrap}>
        <h5 className={styles.diagnosisTitle}>мы диагностируем</h5>
        <span className={styles.diagnosisText}>
          Lorem ipsum dolor sit amet consectetur. Vitae vestibulum consequat
          odio nisl vestibulum eget fermentum aenean imperdiet.
        </span>
        <div className={styles.diagnosis}>
          <DiagnosisDes values={diagnosisDesLeft} />
          <img src='assets/icons/diagnosisCar.png' alt='Car image' />
          <DiagnosisDes values={diagnosisDesRight} />
        </div>
      </div>
      <div className={styles.formalization}>
        <h5 className={styles.formalizationTitle}>OФОРМЛЕНИE ЭПТC</h5>
        <span className={styles.formalizationDescription}>
          ДЛЯ РAНEE ЗАPEГИСТPИPOВAННЫX В PОССИИ АВТOМОБИЛЕЙ, А ТАКЖE Вывезенных
          В РОССИЮ ИЗ-ЗA ГРАНИЦЫ “ПOД КЛЮЧ”
        </span>
        <Description />
      </div>
    </div>
  );
};
