import React, { FC } from 'react';
import styles from './contacts.module.scss';
import { Connect } from '../connect';

export const Contacts: FC = () => {
  return (
    <div className={`container ${styles.wrapper}`}>
      <h4 className={styles.title}>КОНТАКТЫ</h4>
      <div className={styles.contacts}>
        <Connect />
          <iframe
            src='https://yandex.ru/map-widget/v1/?display-text=%D0%B0%D0%B2%D1%82%D0%BE%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%20%D0%BA%D1%83%D1%82&ll=35.300979%2C54.993459&mode=search&oid=192333098440&ol=biz&sll=37.617700%2C55.755863&sspn=2.147827%2C0.702411&text=%D0%B0%D0%B2%D1%82%D0%BE%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%20%D0%BA%D1%83%D1%82&utm_source=share&z=7'
            width='700'
            height='500'
            frameBorder='1'
            allowFullScreen
            className={styles.map}
          />
      </div>
    </div>
  );
};
