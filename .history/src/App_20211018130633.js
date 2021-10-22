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
import { Users } from "./pages/Users";
import { NoMatch } from "./pages/NoMatch";
import { Login } from "./pages/Login";

function App() {

  return (
    <div className="App">
      {console.log(App is executed.);}
      <BrowserRouter>
        <NavLink  exact to="/" activeClassName="link-active">Home</NavLink>
        <NavLink  to="/about" activeClassName="link-active">About</NavLink>
        <NavLink  to="/profile" activeClassName="link-active">Profile</NavLink>
        <NavLink  to="/user" activeClassName="link-active">User</NavLink>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          {/* <Route path="/:id" component={Users} /> */}
          <Route path="/user" component={Users} />
          <Route path="/login" component={Login} />
          <Route component={NoMatch} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
