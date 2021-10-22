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
        <NavLink  exact to="/" activeClassName="link-active">Home</NavLink>
        <NavLink  to="/about" activeClassName="link-active">About</NavLink>
        <NavLink  to="/profile" activeClassName="link-active">Profile</NavLink>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/:id" component={} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
