import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assets/images/unnamed.jpg";

import {UsersPropsType} from "./UsersContainer";
import {AppRootStateType} from "../../redux/redux-store";
import axios from "axios";


class Users extends React.Component<UsersPropsType, AppRootStateType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div className={style.users}>
                {this.props.users.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={style.img} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.isFollowed ? <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            this.props.unfollow(u.id)
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
    }
};

export default Users;

