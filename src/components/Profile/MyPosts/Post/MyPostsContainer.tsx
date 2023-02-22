import React from 'react';
import {addPostAC, updateNewPostAC} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../../redux/redux-store";
import {InitialStateType} from "../../../../redux/profile-reducer";
import {Dispatch} from "redux";




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
type MapStateToPropsType = {
    profilePage: InitialStateType

}
type MapDispatchToPropsType={
    addPost: (messageForPost: string)=> void
    updateNewPostText: (newText: string)=> void
}
export type ProfilePagePropsType= MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType=> {
    return {
        addPost: (messageForPost: string)=>{
            dispatch(addPostAC(messageForPost))},
        updateNewPostText: (newText: string)=>{
            dispatch(updateNewPostAC(newText))}
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;