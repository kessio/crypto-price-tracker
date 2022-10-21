import React from 'react';
import CoinStats from './CoinStats';
import CoinsHeadings from './CoinsHeadings';
import Coins from './Coins';
import NavBar from './NavBar'

const Home = () => (
  <div>
    <NavBar />
    <CoinStats />
    <CoinsHeadings />
    <Coins />
  </div>
);

export default Home;
