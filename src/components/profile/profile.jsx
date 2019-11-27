import React from "react";
import s from "./profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  
  return (
    <div className={s.content}>
      <ProfileInfo />;
      <MyPosts posts={props.profilePage.posts}
      newPostText={props.profilePage.newPostText}
      updateNewPostText={props.updateNewPostText}
       addPost={props.addPost}/>;
    </div>
  );
};

export default Profile;
