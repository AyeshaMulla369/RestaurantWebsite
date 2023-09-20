import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Reserve from './components/Home/Reserve';
import Card from './components/Home/Card';
function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/res' exact Component={Reserve}/>
          <Route path='/menu' exact Component={Card}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
