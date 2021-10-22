
import { Link } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
  return (
    <div className="App">
      <Br
      <Link path="/home">Home</Link>
      <Link path="/about">About</Link>
    </div>
  );
}

export default App;
