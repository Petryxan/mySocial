import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {
let postsElements = 
props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount}/>);
  
let newPostElement = React.createRef(); 
  
   
    
  let addPost = () => {
    
    props.addPost ();
    
  }

  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

//  let postsElements = 
//     props.posts.map(p => <Post message={p.message}  likesCount={p.likesCount}/>);


  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
        {/* <Post likes=" 30" message="2 post" />
        <Post likes=" 40" />
        <Post coment=" coment1" />
        <Post coment=" coment2" /> */}
      </div>
    </div>
  );
};

export default MyPosts;
