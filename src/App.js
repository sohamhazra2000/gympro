
import { Suspense, lazy } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import Home from"./Home"
// import Serviced from './Serviced';
// import Login from './Login';
// import Register from './Register';
// import Blogd from './Blogd';
// import ResponsiveAppBar from './Nav';
// import Trainer from './Trainer';
// import StickyFooter from './Footer';
const Home = lazy(() => import("./Home"));
const Serviced = lazy(() => import("./Serviced"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const Blogd=lazy(() => import("./Blogd"))
const ResponsiveAppBar=lazy(() => import("./Nav"))
const Trainer=lazy(() => import("./Trainer"))
const StickyFooter=lazy(() => import("./Footer"))


function App() {

  return (
    <Suspense fallback={<h2>Loading.....</h2>}>
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
    </Suspense>
    
      
  );
}

export default App;

