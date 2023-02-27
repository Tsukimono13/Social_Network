import React from 'react';
import './Profile.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import {PhotosType, ProfilePageType, ProfileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
    profile: ProfileType | null
}

const Profile = (props:ProfilePropsType) => {
    return (
        <div className={'profile'}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;