import React, { FC } from 'react';
import styles from './navItem.module.scss';
import cn from 'classnames';

interface Props {
  text: string;
  scrollTo: () => void;
  main?: boolean;
}

export const NavItem: FC<Props> = ({ text, scrollTo, main }) => {
  return (
    <div className={styles.outer}>
      <div className={cn({[styles.back]: !main, [styles.backMain]: main})}>
        <div className={styles.inner}>
          <li onClick={scrollTo}>{text}</li>
        </div>
      </div>
    </div>
  );
};
