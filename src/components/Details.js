import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
import { fetchCoinDetails } from '../redux/feature/coinDetails/coinDetails';
import DetailsNav from './DetailsNav';

const Details = () => {
  const coinDetails = useSelector((state) => state.coinDetails);
  const details = coinDetails.lists;

  const { id } = useParams();
  const dispatch = useDispatch();
  // eslint-disable-next-line
  useEffect(() => {
    dispatch(fetchCoinDetails(id));
  }, []);

  return (
    <div>
      <div>
        <DetailsNav name={details.name} />
      </div>
      <div className="h-screen bg-gradient-to-b from-dark to-light">
        <div className="">
          <div>
            <h1 className="text-3xl text-white pt-40 flex justify-center">{details.name}</h1>
          </div>
          <div>
            <span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-white text-dark rounded ml-2">
              #Rank
              {details.rank}
            </span>
          </div>
          <div className="bg-dark p-5 m-4 rounded flex justify-between">
            <span className="text-white font-lato font-bold text-2xl md:3xl">{details.symbol}</span>
            <span className="text-white font-lato font-bold text-1xl">
              {' '}
              {
                Number(details.changePercent24Hr) > 0
                  ? <FaCaretUp size={20} color="#7CFC00" /> : <FaCaretDown size={20} color="red" />
            }
              {Number(details.changePercent24Hr).toFixed(2)}
            </span>
            <span className="text-white font-lato font-bold text-2xl md:text-3xl">
              $
              {Number(details.priceUsd).toLocaleString(undefined)}
            </span>
          </div>
          <div className="bg-dark p-5 m-4 rounded flex justify-between">
            <span className="text-white font-lato font-semibold md:text-3xl">
              Cap
              {details.marketCapUsd}
            </span>
          </div>
          <div className="bg-dark p-5 m-4 rounded font-lato font-semibold flex justify-between">
            <span className="text-white md:text-2xl">
              Vol
              {details.volumeUsd24Hr}
            </span>
          </div>
          <div className="bg-dark p-5 m-4 rounded font-lato font-semibold flex justify-between">
            <span className="text-white md:text-2xl">
              Supply
              {details.supply}
            </span>
          </div>
          <div className="bg-dark p-5 m-4 rounded font-lato font-semibold flex justify-between">
            <a href={details.explorer} target="_blank" className="text-white md:text-1xl" rel="noreferrer">See more</a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Details;
