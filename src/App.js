import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home/Home';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Footers from './Pages/Footers/Footers';


function App() {
  const [sun, setSun]=useState(false)
 
  return (
    <div className="App ">
    
     <Home></Home>
     <Footers></Footers>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
