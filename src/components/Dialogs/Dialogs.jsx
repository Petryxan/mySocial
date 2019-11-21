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

  let dialogsData = [
    {id: 1, name: "Petro"},
    {id: 2, name: "Ira"},
    {id: 3, name: "Dima"}, 
    {id: 4, name: "Oleg"},
    {id: 5, name: "Julia"}, 
    {id: 6, name: "Jura"},
    
  ]

  let messagesData = [
  {id: 1, message: "1111"},
  {id: 2, message: "2222"},
  {id: 3, message: "3333"},
  {id: 4, message: "4444"},
  {id: 5, message: "5555"},
  {id: 6, message: "6666"},
  ]
    
   
  

  return (
  <div className={s.dialogs}>
     <div className={s.dialogsItems}>
       {/* <DialogItem name="Petro" id="1" />
       <DialogItem name="Ira" id="2" />
       <DialogItem name="Dima" id="3" />
       <DialogItem name="Oleg" id="4" />
       <DialogItem name="Julia" id="5" />
       <DialogItem name="Jura" id="6" /> */}

       <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>

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
  {/* <Message message="Hi" />
  <Message message="1111" />
  <Message message="2222" />
  <Message message="3333" /> */}
  <Message message={messagesData[0].message} />
  

</div>
  </div>
  )
};
export default Dialogs;
