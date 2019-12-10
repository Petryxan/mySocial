import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, How are you?)))))", likesCount: 12 },
        { id: 2, message: "its my first post))))", likesCount: 11 }
      ]
    },

    dialogsPage: {
      messages: [
        { id: 1, message: "1111" },
        { id: 2, message: "2222" },
        { id: 3, message: "3333" },
        { id: 4, message: "4444" },
        { id: 5, message: "5555" },
        { id: 6, message: "6666" }
      ],
      dialogs: [
        { id: 1, name: "Petro" },
        { id: 2, name: "Ira" },
        { id: 3, name: "Dima" },
        { id: 4, name: "Oleg" },
        { id: 5, name: "Julia" },
        { id: 6, name: "Jura" }
      ],
newMessageBody: ""

    }, 
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
dispatch(action) {

this._state.profilePage = profileReducer(this._state.profilePage, action);
this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
this._state.sidebar = sidebarReducer(this._state.sidebar, action);

this._callSubscriber(this._state);
}
}

export default store;
 window.store = store;