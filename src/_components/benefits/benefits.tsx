import React, { FC } from 'react';
import styles from './benefits.module.scss';
import { BenefitsItem } from '../benefitsItem';
import { benefits } from './benefits.constants';
import cn from 'classnames';

export const Benefits = () => {
  return (
    <div className={cn('container', styles.wrapper)}>
      <div className={styles.back}></div>
      {benefits.map((item, i) => (
        <BenefitsItem
          title={item.title}
          description={item.description}
          icon={item.icon}
          key={i}
        />
      ))}
    </div>
  );
};
