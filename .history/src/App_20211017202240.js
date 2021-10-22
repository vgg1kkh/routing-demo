
import { Link ,BrowserRouter,Route ,HashRouter} from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import Pro


function App() {
  return (
    <div className="App">
      <HashRouter>
      <Link to="/home">Home</Link>&nbsp;
      <Link to="/about">About</Link>
      </HashRouter>

      
    </div>
  );
}

export default App;
