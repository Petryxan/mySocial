import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hi, How are you?" likes=" 10" />
        <Post message="its my first post" likes=" 20" />
        <Post likes=" 30" message="2 post" />
        <Post likes=" 40" />
        <Post coment=" coment1" />
        <Post coment=" coment2" />
      </div>
    </div>
  );
};

export default MyPosts;