import React, { useRef } from 'react';
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

export const App = () => {
  const pageRef = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

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
      <Title />
      <Benefits />
      <Youtube />
      <Cases ref={pageRef[0]}/>
      <OurApproach ref={pageRef[1]} />
      <Calculator ref={pageRef[2]} />
      <Price />
      <Contacts ref={pageRef[3]}/>  
      <Questions ref={pageRef[4]} />
      <Footer />
    </div>
  );
}

export default App;
