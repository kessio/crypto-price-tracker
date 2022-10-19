import React from 'react';
import { useSelector } from 'react-redux';
import DisplayCoins from './DisplayCoins';

const Coins = () => {
  const prices = useSelector((state) => state.prices);
  const coinsList = prices.lists;
  const coinsAray = coinsList.data;
  return (
    <div>
      {

      coinsAray?.map(({
        id, name, rank, symbol, priceUsd, changePercent24Hr,
      }) => (
        <DisplayCoins key={id} name={name} rank={rank} symbol={symbol} priceUsd={priceUsd} changePercent24Hr={changePercent24Hr} />
      ))
}
    </div>
  );
};

export default Coins;
