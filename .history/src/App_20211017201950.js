
import { Link ,BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/home">Home</Link>
      <Link to="/about" component={About}>About</Link>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
