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

import Friends from "./components/friends/friends";
import store from "./components/redux/store";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <Dialogs store={props.store}  />}
          />

          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
               dispatch={props.dispatch}/>
              )}
          />
  
              
            
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
