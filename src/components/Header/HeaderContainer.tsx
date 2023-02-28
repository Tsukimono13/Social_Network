import React from 'react';
import {AppRootStateType} from "../../redux/redux-store";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType} from "../../redux/profile-reducer";
import {setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<any, AppRootStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        return (
            <>
                <Header isAuth={this.props.isAuth} login={this.props.login}/>
            </>

        );
    };
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);