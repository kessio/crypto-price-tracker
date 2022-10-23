/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import DisplayCoins from './DisplayCoins';

const Coins = ({ searchTerm }) => {
  const prices = useSelector((state) => state.prices);
  const coinsList = prices.lists;
  const coinsAray = coinsList.data;

  return (
    <div>

      <div className="flex flex-wrap">
        {
          coinsAray?.filter((coin) => {
            if (searchTerm === '') {
              return coin;
            }
            if (coin.name === searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)
                || coin.symbol === searchTerm.toUpperCase()) {
              return coin;
            }
            return false;
          }).map(({
            id, name, symbol, priceUsd, changePercent24Hr,
          }, index) => (
            <DisplayCoins
              key={id}
              id={id}
              name={name}
              symbol={symbol}
              priceUsd={priceUsd}
              changePercent24Hr={changePercent24Hr}
              index={index}
            />
          ))
       }
      </div>
    </div>
  );
};

export default Coins;
