import { useState } from "react";
import {
  Link,
  NavLink,
  BrowserRouter,
  Route,
  HashRouter,
  Switch,
  withRouter
} from "react-router-dom";
import classnames from "classnames";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Users } from "./pages/Users";
import { NoMatch } from "./pages/NoMatch";
import { Login } from "./pages/Login";
import Product from "./pages/Product";
import { Detail } from "./pages/Detail";
import { Detail2 } from "./pages/Detail2";
import { Detail3 } from "./pages/Detail3";

function App(props) {

  const id= JSON.stringify({id:1,name:"jack"})

  return (
    <div className="App">
      {console.log("App is executed.")}
 
        <NavLink  exact to="/" activeClassName="link-active">Home</NavLink>
        <NavLink  to="/about" activeClassName="link-active">About</NavLink>
        <NavLink  to="/profile" activeClassName="link-active">Profile</NavLink>
        <NavLink  to="/user" activeClassName="link-active">User</NavLink>
        <NavLink  to={`/detail/${id}`} activeClassName="link-active">Detail</NavLink>
        <NavLink  to={`/detail2?name=jack&age=18`} activeClassName="link-active">Detail2</NavLink>
        <NavLink  to={{pathname:''}} activeClassName="link-active">Detail3</NavLink>
        <button onClick={()=>props.history.push('/product')}>Projuct</button>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          {/* <Route path="/:id" component={Users} /> */}
          <Route path="/user" component={Users} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route path="/detail/:id" component={Detail} />
          <Route path={`/detail2`} component={Detail2} />
          <Route path={`/detail3`} component={Detail3} />
          <Route component={NoMatch} />
        </Switch>
   
    </div>
  );
}

export default withRouter(App);
