import React from "react";
import "./app.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";

 import Profile from "./components/profile/profile";
 import {BrowserRouter, Route} from "react-router-dom";   
 
    
 


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
       <Header /> 
       <Navbar /> 
       <Profile />
        <div className="app-wrapper-content">
          
        
          <Route path="/dialogs" component={Dialogs}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/News" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>  
          
      </div>
    </BrowserRouter>
  );
};
export default App;  

      
    
