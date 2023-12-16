import React, { FC } from 'react';
import styles from './benefits.module.scss';
import { BenefitsItem } from '../benefitsItem';
import { benefits } from './benefits.constants';

export const Benefits: FC = () => {
  return (
    <div className={`container ${styles.wrapper}`}>
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
