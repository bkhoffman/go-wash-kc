import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Login from "./components/Login";
import About from "./components/pages/About";
import Packages from "./components/pages/Packages";
import Cart from "./components/pages/Cart";
import Payment from "./components/pages/Payment";
import Calendar from "./components/pages/Calendar";
import logo from './logo.svg';
import './App.css';

function App() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/packages" component={Packages} />
          <Route exact path="/mycart" component={Cart} />
          <Route exact path="/paynow" component={Payment} />
          <Route exact path="/calendar" component={Calendar} />
        </div>
      </Router>
    );
}

export default App;