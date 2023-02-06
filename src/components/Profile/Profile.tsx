import React from 'react';
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {addPost, ProfilePageType, updateNewPostText} from "../../redux/State";

type ProfileType = {
    posts: ProfilePageType
    addPost: (messageForPost: string)=>void
    updateNewPostText: (newText: string)=> void
}

const Profile = (props:ProfileType) => {
    return (
        <div className={'profile'}>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={addPost} updateNewPostMessageCallback={updateNewPostText}/>
        </div>
    );
};

export default Profile;