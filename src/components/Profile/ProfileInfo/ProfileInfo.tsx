import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profInfo}>
            <div>
                <img className={s.img} src={"https://i.ytimg.com/vi/6jeVZfIfzdA/maxresdefault_live.jpg"}/>
            </div>
            <div className={s.discription}>
                Ava + discription
            </div>
        </div>
    );
};

export default ProfileInfo;