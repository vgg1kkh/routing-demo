
import { Link } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      </BrowserRouter>
      <Link path="/home">Home</Link>
      <Link path="/about">About</Link>
    </div>
  );
}

export default App;
