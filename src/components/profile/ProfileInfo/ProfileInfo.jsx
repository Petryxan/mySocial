import React from "react";
import s from "./ProfileInfo.module.css";
//import MyPosts from "./MyPosts/MyPosts";


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.pngkey.com/png/full/666-6663236_blue-header-png-6-png-image-blue.png">
          
        </img>
      </div>

      <div className={s.discriptionBlock}>
          Ava + discr
          </div>
      
    </div>
  )
}

export default ProfileInfo;