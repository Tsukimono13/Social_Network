import React, {ChangeEvent} from 'react';
import './MyPosts.css';
import {ProfilePageType, StateType} from "../../../../redux/Store";
import {addPostAC, MainACTypes, updateNewPostAC} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import {AppRootStateType} from "../../../../redux/redux-store";
import {connect, useDispatch} from "react-redux";
import {addMessageAC, updateNewMessageTextAC} from "../../../../redux/dialogs-reducer";
import Dialogs from "../../../Dialogs/Dialogs";



/*type PostTypeForMyPost = {

}*/

//const MyPostsContainer = (props: PostTypeForMyPost) => {
    //const dispatch = useDispatch()
    /*let addPostHandler = (messageForPost: string) => {
        dispatch(addPostAC(messageForPost))
    }

    let updateNewMessageCallback = (newText: string) => {
dispatch(updateNewPostAC(newText))
        /!*let action = updateNewPostAC(newText)
        props.dispatch(action)*!/
    }

    return (
        <div>
           <MyPosts updateNewPostText={updateNewMessageCallback} store={props.store} addPostCallback={addPostHandler}/>
        </div>
    );
};*/


let mapStateToProps = (state: StateType)=> {
    return {
        profilePage: state.profilePage,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}
let mapDispatchToProps = (dispatch: any)=> {
    return {
        addPostCallback: (messageForPost: string)=>{dispatch(addPostAC(messageForPost))},
        updateNewPostText: (newText: string)=>{dispatch(updateNewPostAC(newText))}
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;