import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";


type mapStateToPropsRedirectType = {
    auth: boolean
}

let mapStateToPropsRedirect = (state: AppRootStateType):mapStateToPropsRedirectType => {
    return {
        auth: state.auth.isAuth
    }
}

export function withAuthRedirectComponent <T>(Component: ComponentType<T>)  {
    const RedirectComponent = (props: mapStateToPropsRedirectType) => {
        let {auth, ...restProps} = props
            if (!props.auth) return <Redirect to={"/login"}/>
            return <Component {...restProps as T}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}
