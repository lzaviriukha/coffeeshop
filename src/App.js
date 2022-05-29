import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import CoffeeHouse from './components/pages/CoffeeHouse';


function App() {
  return (
    <div className="App">
      <Router>
       <CoffeeHouse />
      </Router>
    </div>
  );
}

export default App;
