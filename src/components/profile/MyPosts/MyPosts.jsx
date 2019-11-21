import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {

  let postData = [
    {id: 1, message: "Hi, How are you?)))))", likesCount: 12},
    {id: 2, message: "its my first post))))", likesCount: 11},
    {id: 3, message: "3333"},
    {id: 4, message: "4444"},
    {id: 5, message: "5555"},
    {id: 6, message: "66661111"},
    ]

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
        <Post message={postData[0+].message} likes={postData[0].likesCount} />
        <Post message={postData[1].message} likes={postData[1].likesCount} />
        <Post likes=" 30" message="2 post" />
        <Post likes=" 40" />
        <Post coment=" coment1" />
        <Post coment=" coment2" />
      </div>
    </div>
  );
};

export default MyPosts;
