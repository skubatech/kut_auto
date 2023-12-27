import React, { forwardRef, useEffect, useState } from 'react';
import styles from './ourApproach.module.scss';
import { Approach } from '../approach';
import { DiagnosisDes } from '../diagnosisDes';
import { Description } from '../description';
import { StepperCustom } from '../stepperCustom';
import { diagnosisDesLeft, diagnosisDesRight } from './ourApproach.constants';
import cn from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const OurApproach = forwardRef<HTMLDivElement, object>((_, ref) => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      '#car',
      {
        opacity: 0.5,
        y: '100%',
      },
      {
        opacity: 1,
        duration: 1,
        delay: 1.5,
        y: 0,
        scrollTrigger: {
          trigger: '#diagnosis',
          start: 'top center'
        },
      }
    );
  }, []);

  const [cnDetail, setCnDetail] = useState<string[]>([]);

  const onMouseEnterHandler = (id) => {
    if(id === 'двигатель') {
      setCnDetail(['porsheEngine']);
    }
    if(id === 'коробка передач') {
      setCnDetail(['porsheGearbox']);
    }
    if(id === 'кузов') {
      setCnDetail(['porsheBody1', 'porsheBody2', 'porsheBody3', 'porsheBody4', 'porsheBody5', 'porsheBody6']);
    }
    if(id === 'юр. чистота') {
      setCnDetail(['porsheTreaty']);
    }
    if(id === 'впуск') {
      setCnDetail([`porsheInlet1`, `porsheInlet2`, `porsheInlet3`]);
    }
    if(id === 'подвеска') {
      setCnDetail(['porsheSuspension1']);
    }
  };

  const onMouseLeaveHandler = () => {
    setCnDetail([]);
  };
  return (
    <div className={cn('container', styles.wrapper)} ref={ref}>
      <div className={styles.back}></div>
      <div className={styles.titleWrap}>
        <img
          className={styles.car}
          src='assets/icons/approachCar.png'
          alt='Car'
        />
        <h4 className={styles.title}>наш подход</h4>
        <span className={styles.description}>
          Мы подберем для вас лучшее предложение на рынке с гарантией
          технической и юридической чистоты
        </span>
      </div>
      <div className={styles.stateWrap}>
        <h5 className={styles.stateTitle} id='diagnosis'>
          открываем глаза на реальное состояние автомобиля
        </h5>
        <span className={styles.stateText}>
          При проверке автомобиля учитываются более 80 параметров, а также
          присылается 150+ фотографий и видео
        </span>
        <Approach />
      </div>
      <div className={styles.diagnosisWrap}>
        <h5 className={styles.whiteTitleCenter}>мы диагностируем</h5>
        <span className={styles.diagnosisText}>
          Гарантия качества и безопасности
        </span>
        <div className={styles.diagnosis}>
          <DiagnosisDes values={diagnosisDesLeft} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}/>
          <img src='assets/icons/diagnosisCar.png' alt='Car' id='car' className={styles.porshe}/>
          {
            cnDetail.map(item => (
              <div className={styles[item]} />
            ))
          }
          <DiagnosisDes values={diagnosisDesRight} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}/>
        </div>
      </div>
      <div>
        <h5 className={styles.whiteTitle}>перечень услуг</h5>
        <StepperCustom />
      </div>
    </div>
  );
});
