import React from 'react';
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import { ProfilePageType} from "../../redux/State";

type ProfileType = {
    posts: ProfilePageType
    addPost: (messageForPost: string)=>void
    updateNewPostText: (newText: string)=> void
}

const Profile = (props:ProfileType) => {
    return (
        <div className={'profile'}>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost} updateNewPostMessageCallback={props.updateNewPostText}/>
        </div>
    );
};

export default Profile;