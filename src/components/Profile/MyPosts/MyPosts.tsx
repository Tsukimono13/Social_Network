import React from 'react';
import './MyPosts.css';
import Post from "./Post/Post";
import {PostsType} from "../../../App";
import {PostTypeForProfile} from "../Profile";
import {PostsArType} from "../../../index";

type PostTypeForMyPost = {
    posts: Array<PostsArType>
}

const MyPosts = (props: PostTypeForMyPost) => {
debugger
    let postsElement = props.posts.map(p => <Post message={p.message} valueLikes={p.likesCount}/>)


    return (
        <div>
            <div>
                My post
            </div>
            <textarea></textarea>
            <div>
                <button>Add Post</button>
            </div>
            {postsElement}
        </div>
    );
};

export default MyPosts;