import React from "react";
import './App.css';
import {Home} from "./Home/Home";
import Routeconfig from './Route/Route';
import { Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routeconfig/>
      </BrowserRouter>
    </div>
  );
}

export default App;
