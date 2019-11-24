import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
    { id: 1, message: "Hi, How are you?)))))", likesCount: 12 },
    { id: 2, message: "its my first post))))", likesCount: 11 },
    { id: 3, message: "3333" },
    { id: 4, message: "4444" },
    { id: 5, message: "5555" },
    { id: 6, message: "66661111" },
  ];

  let dialogs = [
    { id: 1, name: "Petro" },
    { id: 2, name: "Ira" },
    { id: 3, name: "Dima" },
    { id: 4, name: "Oleg" },
    { id: 5, name: "Julia" },
    { id: 6, name: "Jura" }
  ];

  let messages = [
    { id: 1, message: "1111" },
    { id: 2, message: "2222" },
    { id: 3, message: "3333" },
    { id: 4, message: "4444" },
    { id: 5, message: "5555" },
    { id: 6, message: "6666" }
  ];
 

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
