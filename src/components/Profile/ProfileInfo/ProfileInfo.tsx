import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import {PhotosType, ProfilePageType, ProfileType} from "../../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
}
const ProfileInfo = (props:ProfilePropsType) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={s.profInfo}>
            <div>
                <img className={s.img} src={"https://i.ytimg.com/vi/6jeVZfIfzdA/maxresdefault_live.jpg"}/>
            </div>
            <div className={s.discription}>
                <img src={props.profile.photos.large}/>
                Ava + discription
            </div>
        </div>
    );
};

export default ProfileInfo;