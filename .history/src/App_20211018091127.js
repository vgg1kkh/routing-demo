import { useState } from "react";
import {
  Link,
  NavLink,
  BrowserRouter,
  Route,
  HashRouter,
  Switch,
} from "react-router-dom";
import classnames from "classnames";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavLink activeStyle={{color:'red'}} to="/">Home</NavLink>
        <NavLink activeStyle={{color:'red'}} to="/about">About</NavLink>
        <NavLink activeStyle={{color:'red'}} to="/profile">Profile</NavLink>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
