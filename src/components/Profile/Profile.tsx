import React from 'react';
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {MainACTypes, ProfilePageType} from "../../redux/State";

type ProfileType = {
    posts: ProfilePageType
    dispatch: (action: MainACTypes) => void
}

const Profile = (props:ProfileType) => {
    return (
        <div className={'profile'}>
            <ProfileInfo />
            <MyPosts posts={props.posts} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;