import React, { FC } from 'react';
import styles from './youtube.module.scss';
import cn from 'classnames';

export const Youtube: FC = () => {
  return (
    <div className={cn('container', styles.wrapper)}>
      <h4 className={styles.title}>мы в youtube</h4>
      <iframe
        width='100%'
        height='812px'
        src='https://www.youtube.com/embed/Th3i2fyCxms?si=DhhKFfGVVIp66Bma&amp;controls=0'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  );
};
