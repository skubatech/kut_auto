import React, { forwardRef, useEffect, useState } from 'react';
import styles from './contacts.module.scss';
import { Connect } from '../connect';
import cn from 'classnames';

export const Contacts = forwardRef<HTMLDivElement, object>((_, ref) => {
  const [location, setLocation] = useState(localStorage.getItem('location'));

  useEffect(() => {
    window.addEventListener('storage', () => {
      setLocation(localStorage.getItem('location'));
    });
  }, []);

  const getMap = () => {
    switch (location) {
      case 'Москва':
        return 'https://yandex.ru/map-widget/v1/?azimuth=0.058904795675780726&display-text=%D0%B0%D0%B2%D1%82%D0%BE%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%20%D0%BA%D1%83%D1%82&ll=37.597481%2C55.773709&mode=search&oid=192333098440&ol=biz&sctx=ZAAAAAgBEAAaKAoSCZ5eKcsQz0JAEdOgaB7A4EtAEhIJ8bkT7L8uAUARkzgroiZ65j8iBgABAgMEBSgKOABA3K0HSAFiO3JlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfc2VycF9mb3JtdWxhPTAuNjA6bDNfZGMzNDY2MjhfZXhwYjtyZWxldl9yYW5raW5nX2hlYXZ5X3JlbGV2X21hcHNfZm9ybXVsYT0wLjYwOmwzX2RjMzQ2NjI4X2V4cGoCcnWdAc3MTD2gAQCoAQC9Aeq7TV%2FCAQbI28i%2FzAXqAQDyAQD4AQCCAhvQsNCy0YLQvtC%2F0L7QtNCx0L7RgCDQutGD0YKKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=37.597481%2C55.773709&sspn=0.077523%2C0.024216&text=%D0%B0%D0%B2%D1%82%D0%BE%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%20%D0%BA%D1%83%D1%82&utm_source=share&z=14.22&theme=dark';
      case 'Нижний Новгород':
        return 'https://yandex.ru/map-widget/v1/?display-text=%D0%B0%D0%B2%D1%82%D0%BE%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%20%D0%BA%D1%83%D1%82&indoorLevel=1&ll=44.011219%2C56.323145&mode=search&oid=175175322141&ol=biz&sctx=ZAAAAAgBEAAaKAoSCRKFlnX%2FKERAEUHWU6uvTkpAEhIJ8BRypZ4gUEARxY1bzM%2FhNUAiBgABAgMEBSgKOABAwZwGSAFiO3JlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfc2VycF9mb3JtdWxhPTAuNjA6bDNfZGMzNDY2MjhfZXhwYjtyZWxldl9yYW5raW5nX2hlYXZ5X3JlbGV2X21hcHNfZm9ybXVsYT0wLjYwOmwzX2RjMzQ2NjI4X2V4cGoCcnWdAc3MTD2gAQCoAQC9Aeq7TV%2FCAQydlI3KjAWYxojh7wTqAQDyAQD4AQCCAhvQsNCy0YLQvtC%2F0L7QtNCx0L7RgCDQutGD0YKKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=44.015541%2C56.323033&sspn=0.018396%2C0.008921&text=%D0%B0%D0%B2%D1%82%D0%BE%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%20%D0%BA%D1%83%D1%82&utm_source=share&z=16.64&theme=dark';
      case 'Минск':
        return 'https://yandex.ru/map-widget/v1/?azimuth=0.18980465602292423&display-text=%D0%B0%D0%B2%D1%82%D0%BE%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%20%D0%BA%D1%83%D1%82&ll=27.695439%2C53.851975&mode=search&oid=108909144662&ol=biz&sctx=ZAAAAAgBEAAaKAoSCRKFlnX%2FKERAEUHWU6uvTkpAEhIJ8BRypZ4gUEARxY1bzM%2FhNUAiBgABAgMEBSgKOABA%2BZ4GSAFiO3JlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfc2VycF9mb3JtdWxhPTAuNjA6bDNfZGMzNDY2MjhfZXhwYjpyZWxldl9yYW5raW5nX2hlYXZ5X3JlbGV2X3NlcnBfZm9ybXVsYT0wLjY6bDNfZGMzNTMxODhfZXhwYjtyZWxldl9yYW5raW5nX2hlYXZ5X3JlbGV2X3dvcmxkX2Zvcm11bGE9MC43OmwzX2RjMzUzMTg4X2V4cGI7cmVsZXZfcmFua2luZ19oZWF2eV9yZWxldl9tYXBzX2Zvcm11bGE9MC42MDpsM19kYzM0NjYyOF9leHBiOnJlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfbWFwc19mb3JtdWxhPTAuNjpsM19kYzM1MzE4OF9leHBiKXJlbGV2X2lycmVsX2ZpbHRlcj0xLjA6aXJyZWxfZGMzNTM0NzZfZXhwYjVyZWFycj1zY2hlbWVfTG9jYWwvR2VvL1Bvc3RmaWx0ZXIvSXJyZWxUaHJlc2hvbGQ9MC41NWoCcnWdAc3MTD2gAQCoAQC9Aeq7TV%2FCAQbW1PbblQPqAQDyAQD4AQCCAhvQsNCy0YLQvtC%2F0L7QtNCx0L7RgCDQutGD0YKKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=27.695439%2C53.851975&sspn=0.018982%2C0.006220&text=%D0%B0%D0%B2%D1%82%D0%BE%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%20%D0%BA%D1%83%D1%82&tilt=0.29315575711273156&utm_source=share&z=16.25&theme=dark';
      default:
        return 'https://yandex.ru/map-widget/v1/?azimuth=0.058904795675780726&display-text=%D0%B0%D0%B2%D1%82%D0%BE%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%20%D0%BA%D1%83%D1%82&ll=37.597481%2C55.773709&mode=search&oid=192333098440&ol=biz&sctx=ZAAAAAgBEAAaKAoSCZ5eKcsQz0JAEdOgaB7A4EtAEhIJ8bkT7L8uAUARkzgroiZ65j8iBgABAgMEBSgKOABA3K0HSAFiO3JlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfc2VycF9mb3JtdWxhPTAuNjA6bDNfZGMzNDY2MjhfZXhwYjtyZWxldl9yYW5raW5nX2hlYXZ5X3JlbGV2X21hcHNfZm9ybXVsYT0wLjYwOmwzX2RjMzQ2NjI4X2V4cGoCcnWdAc3MTD2gAQCoAQC9Aeq7TV%2FCAQbI28i%2FzAXqAQDyAQD4AQCCAhvQsNCy0YLQvtC%2F0L7QtNCx0L7RgCDQutGD0YKKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=37.597481%2C55.773709&sspn=0.077523%2C0.024216&text=%D0%B0%D0%B2%D1%82%D0%BE%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%20%D0%BA%D1%83%D1%82&utm_source=share&z=14.22&theme=dark';
    }
  };

  return (
    <div className={cn('container', styles.wrapper)} ref={ref} id='#contacts'>
      <h4 className={styles.title}>контакты</h4>
      <div className={styles.contacts}>
        <Connect />
        <iframe
          title='Yandex Map'
          src={getMap()}
          frameBorder='1'
          allowFullScreen
          className={styles.map}
        />
      </div>
    </div>
  );
});
