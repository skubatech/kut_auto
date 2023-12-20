import React, { FC, useEffect } from 'react';
import styles from './banner.module.scss';
import { ButtonCustom } from '../button';
import cn from 'classnames';
import gsap from 'gsap';

interface Props {
  scrollTo: (num: number) => void
}

export const Banner: FC<Props> = ({scrollTo}) => {
  useEffect(() => {
    gsap.fromTo('#banner', { opacity: 0, duration: 1.5, delay: 1, y: 40 }, { opacity: 1, duration: 1.5, y: 0, delay: 1 });
  }, []);
  
  return (
    <div className={cn('container', styles.wrapper)} id='banner'>
    <h3 className={styles.title}>самый<br/> качественный<br/> автоподбор в европе</h3>
      <span className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </span>
      <div className={styles.btnWrap}>
        <ButtonCustom
          textTransform='uppercase'
          text='сотрудничать'
          fontSize={32}
          fontWeight={700}
          onClick={() => scrollTo(3)}
        />
        <ButtonCustom
          color={true}
          textTransform='uppercase'
          text='калькулятор'
          fontSize={32}
          fontWeight={700}
          onClick={() => scrollTo(2)}
        />
      </div>
    </div>
  );
};
