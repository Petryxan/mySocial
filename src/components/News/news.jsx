import React from "react";
import s from "./news.module.css";

const News = props => {
  let textar = React.createRef();

  let oncl = () => {
    let output = textar.current.value;
    alert(output);
  };

return (
  <div className={s.main}>
    <textarea ref={textar}></textarea>
    <button onClick={oncl}>enter</button>
  </div>
);
};
export default News;
