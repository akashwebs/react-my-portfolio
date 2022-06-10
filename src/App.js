import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home/Home';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Footers from './Pages/Footers/Footers';
import { Route, Routes } from 'react-router-dom';
import SingleProjects from './Pages/SingleProjects';
import Header from './Pages/Home/Header';


function App() {
  const [isture, setIstrue]=useState(false)

  const handleMenu=()=>{
      setIstrue(!isture)
  }
  
  return (
    <div className="App ">
        
        <Header isture={isture}></Header>
        <div onClick={handleMenu} id="menu-btn" class={`fas fa-bars ${isture ? 'fa-times':''}`}></div>
    
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/project/:idName' element={<SingleProjects></SingleProjects>}></Route>
    </Routes>
     <Footers></Footers>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
