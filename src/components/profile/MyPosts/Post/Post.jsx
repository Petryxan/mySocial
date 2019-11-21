import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://sun9-27.userapi.com/c855016/v855016985/e0580/un90-CUsz2M.jpg?ava=1"
        alt=""/>
        {props.message}
      
      <div>
        <span>Like</span>
        {props.likes}
        {props.coment}
         
      </div>
    </div>
  );
};
      
 
export default Post;
