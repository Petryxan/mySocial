import React from "react"
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom"

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
  
    <div className={s.dialog + " " + s.active}>
         {/* <NavLink to ={"/dialogs/" + props.id}>{props.name}</NavLink>  Перепишемо {"/dialogs/" + props.id} через перемінну path */}
         <NavLink to ={path}>{props.name}</NavLink>
       </div>      
  )
}

const Message =(props)=> {
  return (
<div className="message">{props.message}</div>
  )
}
const Dialogs = (props) => {

  return (
  <div className={s.dialogs}>
     <div className={s.dialogsItems}>
       <DialogItem name="Petro" id="1" />
       <DialogItem name="Ira" id="2" />
       <DialogItem name="Dima" id="3" />
       <DialogItem name="Oleg" id="4" />
       <DialogItem name="Julia" id="5" />
       <DialogItem name="Jura" id="6" />

       {/* Старий код де не було пропсів. Новий написаний вище.
       
       <div className={s.dialog}>
         <NavLink to ="/dialogs/2"></NavLink>
       </div>
       <div className={s.dialog}>
         <NavLink to ="/dialogs/3"></NavLink>
       </div>
       <div className={s.dialog}>
         <NavLink to ="/dialogs/4"></NavLink>
       </div>
       <div className={s.dialog}>
         <NavLink to ="/dialogs/5"></NavLink>
       </div>
       <div className={s.dialog}>
         <NavLink to ="/dialogs/6"></NavLink>
       </div> */}

     </div>
<div className={s.messages}>
  <Message message="Hi" />
  <Message message="1111" />
  <Message message="2222" />
  <Message message="3333" />
  

</div>
  </div>
  )
};
export default Dialogs;
