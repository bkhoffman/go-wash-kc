import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from "./components/Login";
import About from "./components/About";
import Packages from "./components/Packages";
import Payment from "./components/Payment";
import Calendar from "./components/Calendar";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/packages" component={Packages} />
                    <Route exact path="/paynow" component={Payment} />
                    <Route exact path="/calendar" component={Calendar} />
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
};
export default App;