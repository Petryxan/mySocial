
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
      ]
    }
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

export default store;
window.store = store;
