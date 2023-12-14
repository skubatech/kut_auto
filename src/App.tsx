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

export const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Benefits />
      <Statistics />
      <Approach />
      <Description />
      <PriceCards />
      <Footer />
    </div>
  );
}

export default App;
