import React from 'react';
import {AppRootStateType} from "../../redux/redux-store";
import Header from "./Header";
import {connect} from "react-redux";
import {authMeTC, setAuthUserData} from "../../redux/auth-reducer";
import {RouteComponentProps} from "react-router-dom";



class HeaderContainer extends React.Component<any, AppRootStateType> {
    componentDidMount() {
        this.props.authMeTC()
    }

    render() {
        return (
            <>
                <Header isAuth={this.props.isAuth} login={this.props.login}/>
            </>

        );
    };
}
type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
type ParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<ParamsType> & AuthPropsType
export type AuthPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
type MapDispatchToPropsType = {
    authMeTC: () => void
}
export default connect(mapStateToProps, {authMeTC}) (HeaderContainer);