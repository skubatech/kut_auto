import React, { FC } from 'react';
import styles from './banner.module.scss';
import { Button } from '../button';

export const Banner: FC = () => {
  return (
    <div className={`container ${styles.wrapper}`}>
      <h3 className={styles.title}>САМЫЙ<br/> КАЧЕСТВЕННЫЙ<br/> АВТОПОДБОР В ЕВРОПЕ</h3>
      <span className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </span>
      <div className={styles.btnWrap}>
        <Button
          textTransform='uppercase'
          text='сотрудничать'
          fontSize={32}
          fontWeight={700}
        />
        <Button
          color={true}
          textTransform='uppercase'
          text='калькулятор'
          fontSize={32}
          fontWeight={700}
        />
      </div>
    </div>
  );
};
