import React from "react";
import s from "./news.module.css";


const News = props => {

  let textarea = React.createRef();

  let onclick = () => {
    let output = textarea.current.value
    alert(output)
  };
  return (
  <div className={s.main}>
      

      <textarea ref={textarea}></textarea>
      <button onClick={onclick}>enter</button>

  </div>
  )
};
export default News;