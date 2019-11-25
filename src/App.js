import React from "react";
import "./app.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";

import Profile from "./components/profile/profile";
import { BrowserRouter, Route } from "react-router-dom";
import state, { addPost } from "./components/redux/state";
import Friends from "./components/friends/friends";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        {/* <Profile  posts={props.posts}/> */}
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={ () => 
              <Dialogs
                state={props.state.dialogsPage}/>
             }
          />  
              
           
          <Route
            path="/profile"
            render={() => <Profile 
            state={props.state.profilePage} 
            addPost={props.addPost} />} />
         
          <Route path="/News" component={News} />
          <Route path="/music" component={Music} />
          {/* <Route path="/settings" component={Settings}/> */}
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/friends" render={() => <Friends />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
