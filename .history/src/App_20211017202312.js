
import { Link ,BrowserRouter,Route ,HashRouter} from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';


function App() {
  return (
    <div className="App">
      <HashRouter>
      <Link to="/home">Home</Link>&nbsp;
      <Link to="/about">About</Link>&npsp;
      <Link to="/profile">Profile</Link>

      </HashRouter>

      
    </div>
  );
}

export default App;
