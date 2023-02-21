import React from 'react';
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";


type ProfileType = {
}

const Profile = (props:ProfileType) => {
    return (
        <div className={'profile'}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;