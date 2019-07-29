import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Payment from "./pages/Payment";
import Calendar from "./pages/Calendar";
import logo from "./logo.svg";
import "./App.css";
import TemporaryDrawer from "./components/Drawer/Drawers";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />{" "}
            <Route path="/cart" component={Cart} />{" "}
            <Route exact path="/login" component={Login} />{" "}
            <Route exact path="/signup" component={Signup} />{" "}
            <Route exact path="/about" component={About} />{" "}
            <Route exact path="/packages" component={Packages} />{" "}
            <Route exact path="/paynow" component={Payment} />{" "}
            <Route exact path="/calendar" component={Calendar} />{" "}
          </Switch>{" "}
        </div>{" "}
      </BrowserRouter>
    );
  }
}
export default App;
