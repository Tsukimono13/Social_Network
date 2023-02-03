import React from 'react';
import './MyPosts.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/State";

type PostTypeForMyPost = {
    posts: Array<PostType>
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