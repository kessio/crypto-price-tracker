import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Coins from './components/Coins';
import NavBar from './components/NavBar';
import { fetchCoins } from './redux/feature/price/prices';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Coins />
    </div>
  );
}

export default App;
