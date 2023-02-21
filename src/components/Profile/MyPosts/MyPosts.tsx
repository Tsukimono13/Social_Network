import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/Store";


type PostTypeForMyPost = {
    updateNewPostText: (newText: string)=>void
    addPost: (postText:string)=>void
    profilePage: ProfilePageType
}

const MyPosts = (props: PostTypeForMyPost) => {
    let postsElement = props.profilePage.posts.map(p => <Post message={p.message} valueLikes={p.likesCount} key={p.id}/>)

    let addPostOnClick = () => {
        props.addPost(props.profilePage.messageForNewPost)
        /*props.dispatch(addPostAC(props.posts.messageForNewPost))*/
    }

    let updateNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
/*props.dispatch(updateNewPostAC(e.currentTarget.value))*/
    }

    return (
        <div className={style.postBlock}>
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