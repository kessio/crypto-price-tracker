import React, { useState } from 'react';
import CoinsHeadings from './CoinsHeadings';
import Coins from './Coins';

const CoinStats = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <div className="flex justify-center items-center bg-light h-56">
        <div className="relative w-2/3 mt-20">
          <input
            className="w-full h-18  bg-white placeholder:font-italitc border border-slate-400 drop-shadow-md rounded-md py-2 pl-3 pr-10 outline-light text-dark"
            placeholder="Search Coin"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <CoinsHeadings />
      <Coins searchTerm={searchTerm} />
    </div>
  );
};

export default CoinStats;
