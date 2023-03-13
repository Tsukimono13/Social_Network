import React from 'react';
import './Profile.css';
import {AppRootStateType} from "../../redux/redux-store";
import Profile from "./Profile";

import {connect} from "react-redux";
import {getUserProfileTC, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {InitialStateTypeForAuth} from "../../redux/auth-reducer";




class ProfileContainer extends React.Component<PropsType, AppRootStateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfileTC(userId)
    }

    render() {
        if (!this.props.auth.isAuth) return <Redirect to={"/login"}/>
        return (
            <div className={'profile'}>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
    auth: InitialStateTypeForAuth
}
type MapDispatchToPropsType = {
    getUserProfileTC: (userId: string) => void
}
type ParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<ParamsType> & UsersPropsType
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppRootStateType): { profile: ProfileType | null, auth: InitialStateTypeForAuth} => {
    return {
        profile: state.profilePage.profile,
        auth: state.auth
    }
}
let WithUrlRouterDataContainerComponent = withRouter(ProfileContainer)
const MyProfileContainer = connect(mapStateToProps, {getUserProfileTC}) (WithUrlRouterDataContainerComponent);
export default MyProfileContainer;