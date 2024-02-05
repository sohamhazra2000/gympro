
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from"./Home"
import Serviced from './Serviced';
import Login from './Login';
import Register from './Register';
import Blogd from './Blogd';
import ResponsiveAppBar from './Nav';
import Trainer from './Trainer';
import StickyFooter from './Footer';

function App() {

  return (
    <Router>
       <ResponsiveAppBar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/serviced/:id'element={<Serviced/>}/>
        <Route path='/Login'element={<Login/>}/>
        <Route path='/Register'element={<Register/>}/>
        <Route path='/blogd/:id'element={<Blogd/>}/>
        <Route path='/t'element={<Trainer/>}/>
        
        

      </Routes>
      <StickyFooter/>
    </Router>
    
      
  );
}

export default App;

