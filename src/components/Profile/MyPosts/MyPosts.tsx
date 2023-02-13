import React, {ChangeEvent} from 'react';
import './MyPosts.css';
import Post from "./Post/Post";
import {addPostAC, MainACTypes, ProfilePageType, updateNewPostAC} from "../../../redux/State";

type PostTypeForMyPost = {
    posts: ProfilePageType
    dispatch: (action: MainACTypes) => void
}

const MyPosts = (props: PostTypeForMyPost) => {
    let postsElement = props.posts.posts.map(p => <Post message={p.message} valueLikes={p.likesCount}/>)
    let addPostHandler = () => {
        props.dispatch(addPostAC())
    }

    let updateNewPostCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {

props.dispatch(updateNewPostAC())
    }

    return (
        <div>
            <div>
                {props.posts.posts.map(p => <div key={p.id}><b>{p.message}</b></div>)}
            </div>
            <textarea onChange={updateNewPostCallback} value={props.posts.messageForNewPost}/>
            <div>
                <button onClick={addPostHandler}>Add Post</button>
            </div>
            {postsElement}
        </div>
    );
};

export default MyPosts;