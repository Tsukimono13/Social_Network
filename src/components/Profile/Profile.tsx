import React from 'react';
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {PostsArType} from "../../index";

export type PostTypeForProfile = {
    posts: Array<PostsArType>
}

const Profile = (props:PostTypeForProfile) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;