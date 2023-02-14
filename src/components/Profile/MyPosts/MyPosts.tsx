import React, {ChangeEvent} from 'react';
import './MyPosts.css';
import Post from "./Post/Post";
import {addPostAC, MainACTypes, ProfilePageType, updateNewMessageTextAC, updateNewPostAC} from "../../../redux/State";

type PostTypeForMyPost = {
    posts: ProfilePageType
    dispatch: (action: MainACTypes) => void
}

const MyPosts = (props: PostTypeForMyPost) => {
    let postsElement = props.posts.posts.map(p => <Post message={p.message} valueLikes={p.likesCount} key={p.id}/>)

    let addPostHandler = () => {
        props.dispatch(addPostAC(props.posts.messageForNewPost))
    }

    let updateNewMessageCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
props.dispatch(updateNewPostAC(e.currentTarget.value))
    }

    return (
        <div className={"post-block"}>
            {/*<div>
                {props.posts.posts.map(p => <div key={p.id}><b>{p.message}</b></div>)}
            </div>*/}
            <textarea onChange={updateNewMessageCallback} value={props.posts.messageForNewPost}/>
            <div>
                <button onClick={addPostHandler}>Add Post</button>
            </div>
            {postsElement}
        </div>
    );
};

export default MyPosts;