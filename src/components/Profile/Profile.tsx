import React from 'react';
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {PostType, StateType} from "../../redux/State";

type ProfileType = {
    posts: Array<PostType>
}

const Profile = (props:ProfileType) => {
    return (
        <div className={'profile'}>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;