import React, { useEffect, useState } from 'react';
import styles from './benefits.module.scss';
import { BenefitsItem } from '../benefitsItem';
import { benefits } from './benefits.constants';
import cn from 'classnames';
import { ChooseLocation } from '../chooseLocation';

export const Benefits = () => {
  const [visibleDialog, setVisibleDialog] = useState(false);
  const location = localStorage.getItem('location');

  const show = () => {
    if (!location && window.scrollY > 1500) {
      setVisibleDialog(true);
      window.removeEventListener('scroll', show);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', show);

    return () => {
      window.removeEventListener('scroll', show);
    };
  }, []);

  return (
    <div className={cn('container', styles.wrapper)}>
      <div className={styles.back}></div>
      {benefits.map((item, i) => (
        <BenefitsItem
          title={item.title}
          icon={item.icon}
          key={i}
        />
      ))}
      <ChooseLocation open={visibleDialog} onClose={() => setVisibleDialog(false)} />
    </div>
  );
};
