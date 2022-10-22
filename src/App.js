import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import { fetchCoins } from './redux/feature/price/prices';
import Details from './components/Details';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coin/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
