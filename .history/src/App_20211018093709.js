import { useState } from "react";
import {
  Link,
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
        <Link  exact to="/" activeClassName="link-active">Home</Link>
        <Link  to="/about" activeClassName="link-active">About</Link>
        <Link  to="/profile" activeClassName="link-active">Profile</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
