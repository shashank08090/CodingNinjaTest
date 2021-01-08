import React , {useState} from 'react' ;
import {db} from './config/fire' ;
import './style.css';
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import Home from './Home';
import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";


export default function  Avdojo() {
  const [x, setx] = useState("");
  const [y,setemail] =useState("");

  
  //const [loader, setLoader] = useState(false);

  const Submit = (e) => {
    e.preventDefault();
    //setLoader(true);

    db.collection("Mycollection")
      .add({
        name: x,
        email:y,
        
      })
      .then(() => {
        //setLoader(false); 
       /* console.log("I am here");
       alert("Your message has been submitted👍");
       props.history.push('./Home');
       console.log("I am here");
       //return <Redirect to="/Home/" />
       this.props.history.push('/Home/');
        */
       
       //history.push('./Home');
      })
      .catch((error) => {
        alert(error.message);
        //setLoader(false);
      });
       

    //setx("");
    //return <Redirect to="/Home/" />
   
  };
  return (
    <div id="login_to_Spotixy">
    
       <form className="form" onSubmit={Submit} action ="./Home.js">
      <h1 id="welcomeStatement">Welcome to Spotify </h1>

      <h1 id="login">Please login</h1> <br></br>
      <div id="input">
      <input
        
        placeholder="Name"
        value={x}
        onChange={(e) => setx(e.target.value)}
      /> <br />
       <input type="email"
        
        placeholder="Your Email"
        value={y}
        onChange={(f) => setemail(f.target.value)}
      />
      </div> <br />
     
      
         <button type="submit" id="button">send details</button>  
         
         </form> 
        
         </div>  
  )
}



