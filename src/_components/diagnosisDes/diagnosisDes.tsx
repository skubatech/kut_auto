import React, { FC } from 'react';
import styles from './diagnosisDes.module.scss';
import { DiagnosisDesItem } from '../diagnosisDesItem';

interface DiagnosisValue {
  imgSrc: string;
  imgAlt: string;
  title: string;
  text: string;
}

interface Props {
  values: DiagnosisValue[];
  onMouseEnter: (e) => void;
  onMouseLeave: () => void;
}

export const DiagnosisDes: FC <Props> = ({ values, onMouseEnter, onMouseLeave }) => {
  return (
    <div className={styles.wrapper}>
      {values.map((item) => (
        <DiagnosisDesItem
          imgSrc={item.imgSrc}
          imgAlt={item.imgAlt}
          title={item.title}
          text={item.text}
          key={item.title}
          id={item.title}
          onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
        />
      ))}
    </div>
  );
};
