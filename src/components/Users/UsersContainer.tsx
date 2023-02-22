import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import Users from "./Users";
import {AppRootStateType} from "../../redux/redux-store";



type MapStateToPropsType = {
    users: InitialStateType

}
type MapDispatchToPropsType={
    follow: (userId: string)=>void
    unfollow: (userId: string)=>void
    setUsers: (users: Array<UsersType>)=>void
}
export type UsersPropsType= MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType=> {
    return {
        follow: (userId: string)=>{
            dispatch(followAC(userId))},
        unfollow: (userId: string)=>{
            dispatch(unfollowAC(userId))},
        setUsers: (users: Array<UsersType>)=>{
            dispatch(setUsersAC(users))}
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default MyPostsContainer;