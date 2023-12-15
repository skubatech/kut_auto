import React from 'react';
import './App.scss';
import {Example} from "./_components/example";
import { Header } from './_components/header';
import { Benefits } from './_components/benefits';
import { Statistics } from './_components/statistics';
import { PriceCards } from './_components/priceCards';
import { Banner } from './_components/banner';
import { Footer } from './_components/footer';
import { Description } from './_components/description';
import { Approach } from './_components/approach';
import { Title } from './_components/title/tittle';
import { Youtube } from './_components/youtube';
import { Cases } from './_components/cases';
import { OurApproach } from './_components/ourApproach';
import { Price } from './_components/price';
import { Contacts } from './_components/contacts';

export const App = () => {
  return (
    <div>
      <Header />
      <Title />
      <Benefits />
      <Youtube />
      {/* <Banner /> */}
      <Cases />
      {/* <Statistics /> */}
      {/* <Approach /> */}
      <OurApproach />
      
      <Price />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
