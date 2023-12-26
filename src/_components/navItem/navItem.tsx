import React, { FC } from 'react';
import styles from './navItem.module.scss';
import cn from 'classnames';

interface Props {
  text: string;
  scrollTo: () => void;
}

export const NavItem: FC<Props> = ({ text, scrollTo }) => {
  return (
    <div className={styles.outer}>
      <div className={cn(styles.back)}>
        <div className={styles.inner}>
          <li onClick={scrollTo}>{text}</li>
        </div>
      </div>
    </div>
  );
};
