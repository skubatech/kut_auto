import React, { forwardRef } from 'react';
import styles from './ourApproach.module.scss';
import { Approach } from '../approach';
import { DiagnosisDes } from '../diagnosisDes';
import { Description } from '../description';
import { StepperCustom } from '../stepperCustom';
import { diagnosisDesLeft, diagnosisDesRight } from './ourApproach.constants';
import cn from 'classnames';

export const OurApproach = forwardRef<HTMLDivElement, object>((_, ref) => {
  return (
    <div className={cn('container', styles.wrapper)} ref={ref}>
      <div className={styles.back}></div>
      <div className={styles.titleWrap}>
        <img className={styles.car} src='assets/icons/approachCar.png' />
        <h4 className={styles.title}>наш подход</h4>
        <span className={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Vitae vestibulum consequat
          odio nisl vestibulum eget fermentum aenean imperdiet. Condimentum
          aliquet tellus tincidunt vehicula pellentesque. Pellentesque sed ut in
          orci neque porttitor in. Habitant nisl cursus tellus libero at nibh.
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
        <h5 className={styles.whiteTitle}>мы диагностируем</h5>
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
        <h5 className={styles.whiteTitle}>OФОРМЛЕНИE ЭПТC</h5>
        <span className={styles.formalizationDescription}>
          ДЛЯ РAНEE ЗАPEГИСТPИPOВAННЫX В PОССИИ АВТOМОБИЛЕЙ, А ТАКЖE Вывезенных
          В РОССИЮ ИЗ-ЗA ГРАНИЦЫ “ПOД КЛЮЧ”
        </span>
        <Description />
        <div className={styles.backBottom}></div>
      </div>
      <div>
        <h5 className={styles.whiteTitle}>ПЕРЕЧЕНЬ УСЛУГ</h5>
        <StepperCustom />
      </div>
    </div>
  );
}
)