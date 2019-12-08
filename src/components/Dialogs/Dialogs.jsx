import React from "react";
import DialogItem from ".//DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from ".//Message/Message";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../redux/state";

const Dialogs = props => {

let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map(m => (
    <Message message={m.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let mes = newMessageElement.current.value;
    alert(mes);
  };

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
   }

    let onNewMessageChange = (e) => {
   let body = e.target .value
   props.store.dispatch(updateNewMessageBodyCreator(body));
    }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
        {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
       <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
       <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/> */}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            {" "}
            <textarea value = {newMessageBody}
            onChange = {onNewMessageChange}
            placeholder="Enter your message"></textarea>
          </div>
          <div>
            <button
              onClick= {onSendMessageClick}
              
            ></button>
          </div>

          {/* <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} /> */}
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
