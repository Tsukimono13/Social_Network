import React from 'react';
import {AppRootStateType} from "../../redux/redux-store";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/Api";

class HeaderContainer extends React.Component<any, AppRootStateType> {
    componentDidMount() {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
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