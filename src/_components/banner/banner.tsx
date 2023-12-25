import React, { FC, useEffect } from 'react';
import styles from './banner.module.scss';
import { ButtonCustom } from '../button';
import cn from 'classnames';
import gsap from 'gsap';

interface Props {
  scrollTo: (num: number) => void;
}

export const Banner: FC<Props> = ({ scrollTo }) => {
  useEffect(() => {
    gsap.fromTo(
      '#banner',
      { opacity: 0, duration: 1.5, delay: 1, y: 40 },
      { opacity: 1, duration: 1.5, y: 0, delay: 1 }
    );
  }, []);

  return (
    <div className={cn('container', styles.wrapper)} id='banner'>
      <h3 className={styles.title}>
        качественные
        <br /> автомобили из
        <br /> европы под заказ
      </h3>
      <span className={styles.description}>
        Наша компания предоставляет полный комплекс услуг, связанных с
        автомобилями. Мы поможем вам найти подходящий автомобиль, оформить
        покупку, осуществить пригон из других стран, выполнить растаможку и
        провести необходимую сертификацию.
      </span>
      <div className={styles.btnWrap}>
        <ButtonCustom
          textTransform='uppercase'
          text='консультация'
          fontWeight={700}
          className={styles.btn}
          onClick={() => scrollTo(3)}
        />
        <ButtonCustom
          color={true}
          textTransform='uppercase'
          text='калькулятор'
          fontWeight={700}
          className={styles.btn}
          onClick={() => scrollTo(2)}
        />
      </div>
    </div>
  );
};
