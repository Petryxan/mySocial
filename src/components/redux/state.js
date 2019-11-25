let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, How are you?)))))", likesCount: 12 },
      { id: 2, message: "its my first post))))", likesCount: 11 },
      { id: 3, message: "3333" },
      { id: 4, message: "4444" },
      { id: 5, message: "5555" },
      { id: 6, message: "66661111" }
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
}

export  let addPost = (postMessage)=> {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0

  };
  state.profilePage.posts. push(newPost);
}


export default state;
