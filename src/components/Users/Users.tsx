import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assets/images/unnamed.jpg";
import {followThunkCreator, InitialStateType, setIsFollowing, unfollowThunkCreator} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {userAPI} from "../../api/Api";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: InitialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    unfollowThunkCreator: (userId: number) => void
    followThunkCreator: (userId: number) => void
}
const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={style.users}>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => {
                        props.onPageChanged(p)
                    }}>{p}</span>
                })}
            </div>
            {props.users.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + u.id}>
                        <img className={style.img} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollowThunkCreator(u.id)
                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.followThunkCreator(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
                    <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;