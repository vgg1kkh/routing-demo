
import { Link } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
  return (
    <div className="App">
      <Link path="/home">Home</Link>
      <Link path="/about"
    </div>
  );
}

export default App;
