import React from 'react';
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
  return (
    <div>
      <Header />
      <Title />
      <Benefits />
      <Youtube />
      <Cases />
      <OurApproach />
      <Calculator />
      <Price />
      <Contacts />  
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
