
import { Link ,BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link path="/home" component={Home}>Home</Link>
      <Link path="/about" component={About}>About</Link>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
