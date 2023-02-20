import React, {ChangeEvent} from 'react';
import './MyPosts.css';
import Post from "./Post/Post";
import {addPostAC, MainACTypes, updateNewPostAC} from "../../../redux/profile-reducer";
import {ProfilePageType} from "../../../redux/Store";
import {AppRootStateType} from "../../../redux/redux-store";

type PostTypeForMyPost = {
    updateNewPostText: (newText: string)=>void
    addPostCallback: (postText:string)=>void
    profilePage: ProfilePageType
}

const MyPosts = (props: PostTypeForMyPost) => {
    let postsElement = props.profilePage.posts.map(p => <Post message={p.message} valueLikes={p.likesCount} key={p.id}/>)

    let addPostOnClick = () => {
        props.addPostCallback(props.profilePage.messageForNewPost)
        /*props.dispatch(addPostAC(props.posts.messageForNewPost))*/
    }

    let updateNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(props.profilePage.messageForNewPost)
/*props.dispatch(updateNewPostAC(e.currentTarget.value))*/
    }

    return (
        <div className={"post-block"}>
            {/*<div>
                {props.posts.posts.map(p => <div key={p.id}><b>{p.message}</b></div>)}
            </div>*/}
            <textarea onChange={updateNewMessageHandler} value={props.profilePage.messageForNewPost}/>
            <div>
                <button onClick={addPostOnClick}>Add Post</button>
            </div>
            {postsElement}
        </div>
    );
};

export default MyPosts;