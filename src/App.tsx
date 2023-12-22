import React, { useEffect, useRef } from 'react';
import './App.scss';
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

export const App = () => {
  const pageRef = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    if (!localStorage.getItem('location')) {
      localStorage.setItem('location', 'Москва');
    }
  }, []);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTo = (num) => {
    if (num < pageRef.length) {
      handleClick(pageRef[num]);
    }
  };

  return (
    <div>
      <Header scrollTo={scrollTo}/>
      <Title scrollTo={scrollTo}/>
      <Benefits />
      <Youtube />
      <Cases ref={pageRef[0]}/>
      <OurApproach ref={pageRef[1]} />
      <Calculator ref={pageRef[2]} scrollTo={scrollTo}/>
      <Price />
      <Contacts ref={pageRef[3]}/>  
      <Questions ref={pageRef[4]} />
      <Manager />
      <Footer />
    </div>
  );
}

export default App;
