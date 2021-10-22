
import { Link ,BrowserRouter,Route ,HashRouter} from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';


function App() {
  return (
    <div className="App">
      <HashRouter>
      <Link to="/">Home</Link>&nbsp;
      <Link to="/about">About</Link>&nbsp;
      <Link to="/profile">Profile</Link>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/profile" component={Profile}/>
      </HashRouter>
      

      
    </div>
  );
}

export default App;
