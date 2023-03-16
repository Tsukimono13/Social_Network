import {Redirect} from "react-router-dom";
import React from "react";
import ProfileContainer from "../components/Profile/ProfileContainer";
import {AppRootStateType} from "../redux/redux-store";
import {ProfileType} from "../redux/profile-reducer";
import {InitialStateTypeForAuth} from "../redux/auth-reducer";
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state: AppRootStateType): { auth: InitialStateTypeForAuth} => {
    return {
        auth: state.auth
    }
}

export let withAuthRedirectComponent = () => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.auth.isAuth) return <Redirect to={"/login"}/>
            return <ProfileContainer />
        }
    }

   let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}
