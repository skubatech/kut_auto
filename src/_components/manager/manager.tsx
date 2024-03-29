import React, { useEffect, useState } from 'react';
import styles from './manager.module.scss';
import cn from 'classnames';
import gsap from 'gsap';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import {citiesLinks} from "./manager.constants";

export const Manager = () => {
  const [location, setLocation] = useState(localStorage.getItem('location'));
  const [open, setOpen] = useState(false);
  const [visibleIcon, setVisibleIcon] = useState(false);
  const [links, setLinks] = useState(citiesLinks['Москва'])
  
  const openBlock = () => {
    setOpen((prev) => !prev);
  };

  const show = () => {
    setVisibleIcon(true);
    gsap.fromTo(
      '#manager',
      {
        y: 50,
      },
      {
        y: 0,
        duration: 1.5,
      }
    );
    window.removeEventListener('scroll', show);
  };

  useEffect(() => {
    setLinks(citiesLinks[location])
  }, [location])

  useEffect(() => {
    window.addEventListener('storage', () => {
      setLocation(localStorage.getItem('location'));
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', show);

    return () => {
      window.removeEventListener('scroll', show);
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '#block',
      { opacity: 0.5, y: 30 },
      { opacity: 1, duration: 0.5, y: 0 }
    );
    gsap.from('#manager', { y: -10 });
  }, [open]);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div className={styles.wrapper}>
      {!open && (
        <img
          src='assets/icons/managerIcon.svg'
          alt='Manager'
          className={cn({
            [styles.iconDefault]: visibleIcon,
            [styles.iconNone]: !visibleIcon,
          })}
          id='manager'
          onClick={openBlock}
        />
      )}
      {open && (
        <div className={styles.blockWrap} id='block'>
          <div className={styles.block} id='block'>
            <img
              src='assets/icons/managerIcon.svg'
              alt='Manager'
              className={styles.icon}
            />
            <div className={styles.titleWrap}>
              <span className={styles.title}>Денис Дуенин</span>
              <span className={styles.description}>
                Позвоните эксперту для консультации
              </span>
            </div>
            <div className={styles.linksWrap}>
              <a
                href={links.whats}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='assets/icons/managerWhatsApp.svg' alt='Icon' className={styles.linkIcon}/>
              </a>
              <a
                href={links.telegram}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='assets/icons/managerTelegram.svg' alt='Icon' className={styles.linkIcon} />
              </a>
            </div>
            <a href={links.phoneLink} className={styles.phone}>
              {links.phone}
            </a>
          </div>
          <button className={styles.btn} onClick={openBlock}>
            <img src='assets/icons/whiteCross.svg' alt='Icon' />
          </button>
        </div>
      )}
    </div>
    </ClickAwayListener>
  );
};
