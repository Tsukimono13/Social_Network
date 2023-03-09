import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/unnamed.jpg"



const UsersWithoutClass = (props: UsersPropsType) => {
    let getUsers =()=> {
        if (props.users.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    }
    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.users.map(u=><div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=>{props.follow(u.id)}}>Unfollow</button> : <button onClick={()=>{props.unfollow(u.id)}}>Follow</button>}

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

export default UsersWithoutClass;

/*
[ {id: v1(), isFollowed: true, fullName: "Anastasiya", status: "Hi! Let's talk", location: {country: 'Russia', city:'Moscow'}, photoUrl:'https://cdn66.printdirect.ru/cache/product/b8/9f/4690207/tov/all/480z480_front_1009_0_0_0_4343f14b06c54f09df9b54f4ccbb.jpg'},
    {id: v1(), isFollowed: false, fullName: "Katy", status: 'Yesterday I saw her in cafe', location: {country: 'USA', city:'NY'}, photoUrl: 'https://yt3.ggpht.com/ytc/AKedOLTAbuC7IGhf8JQx5ahcAYSe7oDYlYKjzhvwxlSpXg=s900-c-k-c0x00ffffff-no-rj'},
    {id: v1(), isFollowed: false, fullName: "Tommy", status: 'What do you think about me?', location: {country: 'German', city:'Munched'}, photoUrl: 'https://yt3.ggpht.com/ytc/AKedOLRTxe_QIgAhymtiPVcX2jD6ORKgM0FsnvX9GxD8qQ=s900-c-k-c0x00ffffff-no-rj'},
    {id: v1(), isFollowed: true, fullName: "Ivan", status: 'I like pets and my friends', location: {country: 'Russia', city:'Tomsk'}, photoUrl:'https://yt3.ggpht.com/ytc/AMLnZu_IUuOovGaSyzkUnKZzd5Md66kvW5FIDvM2tVm7OA=s900-c-k-c0x00ffffff-no-rj'}
]*/
