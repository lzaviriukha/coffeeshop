import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  fetchGoods
} from "./features/goods/goodsSlice";

import CoffeeHouse from './components/pages/CoffeeHouse';
import OurCoffee from './components/pages/OurCoffee/OurCoffee';
import './App.css';



function App() {
  const goodsStatus = useSelector((state) => state.goods.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (goodsStatus === "idle") {
      dispatch(fetchGoods());
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CoffeeHouse />} />
          <Route path="/ourcoffee" element={<OurCoffee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
