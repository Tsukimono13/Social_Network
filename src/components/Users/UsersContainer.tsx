import React from 'react';
import {connect} from "react-redux";
import {
    follow, followThunkCreator, getUsersThunkCreator,
    InitialStateType,
    setCurrentPage,
    unfollow, unfollowThunkCreator,

} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {compose} from "redux";
import {withAuthRedirectComponent} from "../../hoc/AuthRedirect";



class UsersContainerComponent extends React.Component<UsersPropsType, AppRootStateType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       onPageChanged={this.onPageChanged}
                       followingInProgress={this.props.followingInProgress}
                       unfollowThunkCreator={unfollowThunkCreator}
                       followThunkCreator={followThunkCreator}/>

            </>
        );
    }
}

type MapStateToPropsType = {
    users: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>

}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number)=> void
    unfollowThunkCreator: (userId: number) => void
    followThunkCreator: (userId: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        users: state.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}
/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}*/

export default compose<React.ComponentType>(
    withAuthRedirectComponent,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        getUsersThunkCreator,
        followThunkCreator,
        unfollowThunkCreator
    })
)(UsersContainerComponent)