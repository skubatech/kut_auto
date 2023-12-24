import React, { FC } from 'react';
import styles from './stepperDescription.module.scss';

interface Props {
  description: string[];
  descriptionItems?: string[];
}

export const StepperDescription: FC<Props> = ({
  description,
  descriptionItems,
}) => {
  return (
    <div className={styles.wrapper}>
      {description && description.map((item) => <span className={styles.text} key={item}>{item}</span>)}
      {descriptionItems && (
        <ul className={styles.list}>
          {descriptionItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
