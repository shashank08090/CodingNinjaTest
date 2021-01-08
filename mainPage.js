import React, { useState } from 'react';
//import Lyfcycle from './lyfcycle';
//import Loginn from './loginn';
//import Auth from './auth';
import { BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import Avdojo from './avdojo';
//import Login from './Login';
import Home from './Home';
import Navbar from './navbar';

  



const MainPage=(props)=>{ 
      return (<>


<BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Avdojo />
          </Route>
          <Route path="/about">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
   
</>);
}

export default MainPage;