import Navigation from './Components/navigation';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Pages0 from './Components/Page0';
import Pages1 from './Components/Page1';
import Pages2 from './Components/Page2';

function App() {
  return ( 
    <Router>
      <div className="App">
        <Navigation />
      <Routes>
        <Route exact path='/Page1' element={<Pages1 />}>
        </Route>
        <Route path="/Page2" element={<Pages2 />}>
        </Route>
        <Route path="*" element={<Pages0 />}>
        </Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
