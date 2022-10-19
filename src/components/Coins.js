import React from 'react';
import { useSelector } from 'react-redux';

const Coins = () => {
  const rockets = useSelector((state) => state.prices);
  return (
    <div>
      {
        console.log(rockets.lists.data)
      }
    </div>
  );
};

export default Coins;
