import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assets/images/unnamed.jpg";
import {InitialStateType} from "../../redux/users-reducer";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: InitialStateType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onPageChanged: (pageNumber: number)=>void
}
const Users = (props:UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
            <div className={style.users}>
                <div>
                    {pages.map(p=> {
                        return <span /*className={props.currentPage === p && style.selectedPage}*/ onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {props.users.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={style.img} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.isFollowed ? <button onClick={() => {
                            props.follow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            props.unfollow(u.id)
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