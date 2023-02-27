import React from 'react';
import './Profile.css';
import {AppRootStateType} from "../../redux/redux-store";
import Profile from "./Profile";

import {connect} from "react-redux";
import {ProfilePageType, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";




class ProfileContainer extends React.Component<PropsType, AppRootStateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div className={'profile'}>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
}
type ParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<ParamsType> & UsersPropsType
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppRootStateType): { profile: ProfileType | null } => {
    return {
        profile: state.profilePage.profile
    }
}
let WithUrlRouterDataContainerComponent = withRouter(ProfileContainer)
const MyProfileContainer = connect(mapStateToProps,{setUserProfile}) (WithUrlRouterDataContainerComponent);
export default MyProfileContainer;