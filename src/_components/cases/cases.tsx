import React, { FC, forwardRef } from 'react';
import styles from './cases.module.scss';
import { Statistics } from '../statistics';
import { ImgList } from '../imgList/imgList';
import cn from 'classnames';

export const Cases = forwardRef<HTMLDivElement, object>((_, ref) => {
  return (
    <div ref={ref}>
      <div className={cn('container', styles.wrapper)}>
        <h4 className={styles.title}>наши кейсы</h4>
        <ImgList />
      </div>
        <Statistics />
    </div>
  );
})
