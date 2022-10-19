import React from 'react';

const DisplayCoins = ({
  id, name, rank, symbol, priceUsd, changePercent24Hr,
}) => (
  <div>
    <h2>{name}</h2>
    <p>{priceUsd}</p>
  </div>
);

export default DisplayCoins;
