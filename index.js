import React from 'react';
import ReactDom from 'react-dom';
import Dustbin from './dustbin';
import Navbar from './navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Avdojo from './avdojo';
//import Lyfcycle from './lyfcycle';
import Home from './Home';
import MainPage from './mainPage';



ReactDom.render(<>


<MainPage />
 
    
</>,
    document.getElementById("root"));
