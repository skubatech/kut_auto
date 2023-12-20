import React, { FC } from 'react';
import styles from './description.module.scss';
import { DescriptionItem } from '../descriptionItem';
import { descriptions } from './description.constants';

export const Description: FC = () => {
  return (
    <div className={styles.wrapper}>
      {descriptions.map((item, i) => (
        <DescriptionItem title={item.title} text={item.text} key={i} />
      ))}
    </div>
  );
};
