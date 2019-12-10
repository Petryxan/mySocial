const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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

};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 7, message: body });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return { type: SEND_MESSAGE };
};

export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
};

export default dialogsReducer;
