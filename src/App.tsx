import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import './App.module.scss';
import { Header } from './_components/header';
import { Benefits } from './_components/benefits';
import { Footer } from './_components/footer';
import { Title } from './_components/title/tittle';
import { Youtube } from './_components/youtube';
import { Cases } from './_components/cases';
import { OurApproach } from './_components/ourApproach';
import { Price } from './_components/price';
import { Contacts } from './_components/contacts';
import { Questions } from './_components/questions';
import { Calculator } from './_components/calculator';
import { Manager } from './_components/manager';
import styles from './App.module.scss';
import {useLocation} from "./App.helpers";

export const App = () => {
  const [pageRef, setState] = useState([useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]);
  const [f, setF] = useState(false);
  useLocation();

  const handleClick = (ref: MutableRefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: "start", inline: 'center' });
    if(!f) setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: "start", inline: 'center' });
    }, 400)
  };

    useEffect(() => {
    }, [pageRef]);

  const scrollTo = (num: number) => {
    if (num < pageRef.length) {
      handleClick(pageRef[num]);
        setF(true);
    }
  };

  return (
    <div className={styles.main}>
      <Header scrollTo={scrollTo}/>
      <Title scrollTo={scrollTo}/>
      <Benefits />
      <Youtube />
      <Cases ref={pageRef[0]}/>
      <OurApproach ref={pageRef[1]} />
      <Calculator ref={pageRef[2]} scrollTo={scrollTo}/>
      <Price scrollTo={scrollTo}/>
      <Contacts ref={pageRef[3]}/>  
      <Questions ref={pageRef[4]} />
      <Manager />
      <Footer />
    </div>
  );
}

export default App;
