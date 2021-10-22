
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
      </HashRouter>
      <Route path={/>

      
    </div>
  );
}

export default App;
