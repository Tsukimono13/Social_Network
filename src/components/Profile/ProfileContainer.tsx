import React from 'react';
import './Profile.css';
import {AppRootStateType} from "../../redux/redux-store";
import Profile from "./Profile";

import {connect} from "react-redux";
import {getUserProfileTC, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirectComponent} from "../../hoc/AuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId);
        if (!userId && this.props.profile) {
            userId = this.props.profile.userId
        }
        this.props.getUserProfileTC(userId)
    }

    render() {

        return (
            <div className={'profile'}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}
let AuthRedirectComponent = withAuthRedirectComponent(ProfileContainer)


type MapStateToPropsType = {
    profile: ProfileType | null

}
type MapDispatchToPropsType = {
    getUserProfileTC: (userId: number) => void
}
type ParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<ParamsType> & UsersPropsType
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppRootStateType): { profile: ProfileType | null} => {
    return {
        profile: state.profilePage.profile,

    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC: getUserProfileTC}),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainer)

