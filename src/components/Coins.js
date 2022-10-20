import React from 'react';
import { useSelector } from 'react-redux';
import DisplayCoins from './DisplayCoins';

const Coins = () => {
  const prices = useSelector((state) => state.prices);
  const coinsList = prices.lists;
  const coinsAray = coinsList.data;
  return (
    <div className="flex flex-wrap">
      {

      coinsAray?.map(({
        id, name, symbol, priceUsd, changePercent24Hr,
      }, index) => (
        <DisplayCoins key={id} name={name} symbol={symbol} priceUsd={priceUsd} changePercent24Hr={changePercent24Hr} index={index} />
      ))
}
    </div>
  );
};

export default Coins;
