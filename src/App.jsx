import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Api from './components/Api';
 //import the Tailwind CSS style
 import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> }  />
        <Route path="/api" element = { <Api />} />
      </Routes>
    </Router>
  );
}

export default App;
