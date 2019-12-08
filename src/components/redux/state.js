
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
    sidebar: {}
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }   else if (action.type === UPDATE_NEW_MESSAGE_BODY){
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }  else if (action.type === SEND_MESSAGE){
        let body = this._state.dialogsPage.newMessageBody;
        this._state.dialogsPage.newMessageBody = '';
        this._state.dialogsPage.messages.push({ id: 7, message: body });
        this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => {
  return {   type: ADD_POST
 }
 }
 
 export const updateNewPostTextActionCreator = (text) => {
   return {   type: UPDATE_NEW_POST_TEXT, newText: text}
  }

  export const sendMessageCreator = () => {
    return {   type: SEND_MESSAGE
   }
   }
   
   export const updateNewMessageBodyCreator = (body) => {
     return {   type: UPDATE_NEW_MESSAGE_BODY, body: body}
    }

export default store;
window.store = store;
