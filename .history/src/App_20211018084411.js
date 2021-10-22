import { useState } from "react";
import {
  Link,
  NavLink,
  BrowserRouter,
  Route,
  HashRouter,
  Switch,
} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";

function App() {
  const initialArray = [
    { id: 1, to: "/", title: "Home" },
    { id: 2, to: "/about", title: "About" },
    { id: 3, to: "/home", title: "Home" },
  ];
  const [links, setLinks] = useState(initialArray);
  const [activeLink,setActiveLink] = useState(null)
  return (
    <div className="App">
      <HashRouter>
        {links.map((item) => (
          <Link key={item.key} 
          to={item.to}
          style={{className}}
          onClick={()=>setActiveLink(item.id)}>
            {item.title}
          </Link>
        ))}
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
