/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaCaretUp, FaCaretDown, FaArrowCircleRight } from 'react-icons/fa';

const DisplayCoins = ({
  symbol, priceUsd, changePercent24Hr, id,
}) => {
  const priceToNumber = Number(priceUsd);
  const priceToDecimal = (priceToNumber).toLocaleString(undefined);

  const chnagePercentToNumber = Number(changePercent24Hr);
  const changePercentToDecimal = chnagePercentToNumber.toFixed(2);

  return (

    <div className="bg-light w-1/2 h-36 border-2 hover:scale-105 duration-75 border-darkCard md:w-1/4">
      <Link to={`/coin/${id}`}><FaArrowCircleRight className="w-100 float-right mt-2 mr-3 text-white" /></Link>
      <div className="ml-10 mt-5">
        <span className="flex text-3xl text-white font-lato font-extrabold">{symbol}</span>
      </div>
      <div className="ml-8 mt-5 flex flex-col">
        <span className="text-1xl text-white font-lato font-bold">
          $
          {priceToDecimal}
        </span>
        <div className="flex mt-3">
          <span>
            {

            changePercentToDecimal > 0
              ? <FaCaretUp size={20} color="#7CFC00" /> : <FaCaretDown size={20} color="red" />
            }
          </span>
          <span className="text-white font-semibold">
            {changePercentToDecimal}
            %
          </span>
        </div>
      </div>
    </div>

  );
};

DisplayCoins.prototype = {
  symbol: PropTypes.string.isRequired,
  priceUsd: PropTypes.string.isRequired,
  changePercent24Hr: PropTypes.string,

};
export default DisplayCoins;
