
import { Link ,BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';


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
