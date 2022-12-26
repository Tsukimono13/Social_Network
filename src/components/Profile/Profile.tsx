import React from 'react';
import './Profile.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={"right-content"} >
                <div>
                    <img className={"img-content"} src={"https://i.ytimg.com/vi/6jeVZfIfzdA/maxresdefault_live.jpg"}/>
                </div>
                <div>Ava + discription</div>
                <MyPosts />
            </div>
    );
};

export default Profile;