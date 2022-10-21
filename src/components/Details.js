import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchCoinDetails } from '../redux/feature/coinDetails/coinDetails';
import DetailsNav from './DetailsNav';

const Details = () => {
    const coinDetails = useSelector((state) => state.coinDetails);
   const details = coinDetails.lists;
  
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCoinDetails(id))
      }, []);

  return (
    <div>
    <div>
        <DetailsNav name={details.name} />
    </div>
    <div className="h-screen bg-gradient-to-b from-dark to-light">
        <div className="">
          <div>
            <h1 className="text-4xl text-white pt-40 flex justify-center">{details.name}</h1>
          </div>
          <div>
          <span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-white text-dark rounded ml-2">#Rank {details.rank}</span>
          </div>
          <div className="bg-lightCard">
            <span>{details.name}</span>
            <span>{details.symbol}</span>
          </div>
        </div>
    </div>
       
    </div>
  )
}

export default Details