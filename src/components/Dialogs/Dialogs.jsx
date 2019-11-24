import React from "react";
import DialogItem from ".//DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from  ".//Message/Message"



const Dialogs = props => {
  

  let dialogsElements = props.dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.messages.map(m => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
        {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
       <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
       <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/> */}
      </div>
      <div className={s.messages}>
        {messagesElements}
        {/* <Message message={messagesData[0].message} />
  <Message message={messagesData[1].message} /> */}
      </div>
    </div>
  );
};
export default Dialogs;
