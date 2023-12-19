import React, { forwardRef, useEffect, useRef } from 'react';
import styles from './cases.module.scss';
import { Statistics } from '../statistics';
import { ImgList } from '../imgList/imgList';
import cn from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 

export const Cases = forwardRef<HTMLDivElement, object>((_, ref) => {
  const statisticsRef = useRef(null);
  
  useEffect(() => {
    const el = statisticsRef.current;
    gsap.fromTo(
      el,
      { 
        width: '60%', 
        opacity: 0, 
      },
      {
        width: '100%',
        height: '100%',
        opacity: 1,
        duration: 1.7,
        scrollTrigger: { 
          trigger: el,
        },
      }
    );
  }, []);
  return (
    <div ref={ref} className={styles.casesWrap}>
      <div className={styles.back}></div>
      <div className={cn('container', styles.wrapper)}>
        <h4 className={styles.title}>наши кейсы</h4>
        <ImgList />
      </div>
      <Statistics ref={statisticsRef} />
    </div>
  );
});
