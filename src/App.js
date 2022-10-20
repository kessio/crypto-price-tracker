import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
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
      <Home />
    </div>
  );
}

export default App;
