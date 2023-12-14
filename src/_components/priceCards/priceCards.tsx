import React, { FC } from 'react';
import styles from './priceCards.module.scss';
import { PriceCard } from '../priceCard/priceCard';

const cards = [
    {
        title: 'a',
        descrption: 'Lorem ipsum dolor sit amet consectetur. Justo fames volutpat cursus posuere quisque sit tellus arcu egestas. Consectetur nisi diam sit volutpat pulvinar magna tortor. ',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'a++',
        descrption: 'Lorem ipsum dolor sit amet consectetur. Justo fames volutpat cursus posuere quisque sit tellus arcu egestas. Consectetur nisi diam sit volutpat pulvinar magna tortor. ',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'a',
        descrption: 'Lorem ipsum dolor sit amet consectetur. Justo fames volutpat cursus posuere quisque sit tellus arcu egestas. Consectetur nisi diam sit volutpat pulvinar magna tortor. ',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
]

export const PriceCards:FC = () => {
  return (
    <div className={`container ${styles.wrapper}`}> 
    {
        cards.map((item, i) => (
            <PriceCard title={item.title} description={item.descrption} text={item.text} key={i}/>
        ))
    }
    </div>
  );
};
