import React from 'react';

const CoinStats = () => (
  <div className="flex justify-between items-center bg-primary h-56">
    <div className="flex flex-col text-white ml-4 pt-10">
      <span className="font-lato font-extrabold text-2xl">$923B</span>
      <span>Market Cap</span>
    </div>
    <div className="flex flex-col text-white pt-10">
      <span className="font-lato font-extrabold text-2xl">$51.6B</span>
      <span>Volume</span>
    </div>
    <div className="flex flex-col text-white pt-10 mr-4">
      <span className="font-lato font-extrabold text-2xl">40%</span>
      <span>BTC</span>
    </div>
  </div>
);

export default CoinStats;
