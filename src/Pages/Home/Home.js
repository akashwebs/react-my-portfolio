import React, { useState } from 'react';
import About from './About';
import Banner from './Banner';
import Contacts from './Contacts';
import Header from './Header';
import Portfolio from './Portfolio';
import Services from './Services';
import { faBars,faTimes } from "react-icons/fa";


const Home = () => {
   
    
    return (
        <>
        <Banner></Banner>
        <About></About>
        <Services></Services>
        <Portfolio></Portfolio>
        <Contacts></Contacts>
        </>
    );
};

export default Home;