import React from 'react';
import s from "./friends.module.css";


const Friends = (props) => {
    return (
        <div className="s.blockFriends">
           <div className="s.headerFriends">
               Friends
           </div>
           <div className="s.friends">
            <span className="s.f1">11</span>
            <span className="s.f1">22</span>
            <span className="s.f1">33</span>
            </div>
            <div className="s friendsAva">
            <span className="s.f1a">44</span>
            <span className="s.f1a">55</span>
            <span className="s.f1a">66</span>  
            </div>
       
        </div>  
           
            
    );
};
export default Friends