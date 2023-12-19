import React from 'react';
import styles from './manager.module.scss';

export const Manager = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src='assets/icons/userIcon.svg'
        alt='Manager'
        className={styles.icon}
      />
      <div className={styles.titleWrap}>
        <span className={styles.title}>Ольга Соколова</span>
        <span className={styles.description}>
          Позвоните эксперту для консультации
        </span>
      </div>
      <a>+7 (961)-111-05-01</a>
    </div>
  );
};
