import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assets/images/unnamed.jpg";

import {UsersPropsType} from "./UsersContainer";
import {AppRootStateType} from "../../redux/redux-store";
import axios from "axios";


class Users extends React.Component<UsersPropsType, AppRootStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
   onPageChanged = (pageNumber: number) => {
       this.props.setCurrentPage(pageNumber);
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
           this.props.setUsers(response.data.items)
       })
   }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={style.users}>
                <div>
                    {pages.map(p=> {
                       return <span className={this.props.currentPage === p && style.selectedPage} onClick={(e)=>{this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
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

