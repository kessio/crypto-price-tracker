import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DisplayCoins from './DisplayCoins';

const Coins = () => {
  const prices = useSelector((state) => state.prices);
  const coinsList = prices.lists;
  const coinsAray = coinsList.data;
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <div className="relative">
        <input
          className="w-full bg-white placeholder:font-italitc border border-slate-400 drop-shadow-md rounded-md py-2 pl-3 pr-10 outline-light text-dark"
          placeholder="Search Coin"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap">
        {
          coinsAray?.filter((coin) => {
            if (searchTerm === '') {
              return coin;
            }
            if (coin.name === searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1) || coin.symbol === searchTerm.toUpperCase()) {
              return coin;
            }
          }).map(({
            id, name, symbol, priceUsd, changePercent24Hr,
          }, index) => (
            <DisplayCoins key={id} id={id} name={name} symbol={symbol} priceUsd={priceUsd} changePercent24Hr={changePercent24Hr} index={index} />
          ))
       }
      </div>
    </div>
  );
};

export default Coins;
