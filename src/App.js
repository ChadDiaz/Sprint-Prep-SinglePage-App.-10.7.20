import React from "react";
// eslint-disable-next-line no-unused-vars
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import CoffeeForm from "./components/CoffeeForm";



function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/order-coffee" render={() => <CoffeeForm />} />
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
