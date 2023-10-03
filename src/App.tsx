import React, { MouseEvent, useEffect } from 'react';
import Main from './Main';
import Portfolio from './Portfolio';
import { PORTFOLIO_ITEMS } from './PortfolioData';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
       
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:pagepath" element={<Portfolio portfolioitems={PORTFOLIO_ITEMS} />} />
        </Routes>

    </Router>
  );
}

export default App;
