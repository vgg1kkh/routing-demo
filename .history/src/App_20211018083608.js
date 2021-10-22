
import { Link ,NavLink,BrowserRouter,Route ,HashRouter,Switch} from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';


function App() {
  state
  return (
    <div className="App">
      <HashRouter>
      <NavLink to="/">Home</NavLink>&nbsp;
      <NavLink to="/about">About</NavLink>&nbsp;
      <NavLink to="/profile">Profile</NavLink>
     

      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/profile" component={Profile}/>
      </Switch>

      </HashRouter>
      

      
    </div>
  );
}

export default App;
