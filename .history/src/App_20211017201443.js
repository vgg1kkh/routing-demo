
import { Link } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Link path="/home" to={Home}></Link>
    </div>
  );
}

export default App;
