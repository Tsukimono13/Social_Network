import React from 'react';
import './MyPosts.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
                <div>My post</div>
            <textarea></textarea>
            <button>Add Post</button>
                <Post message={"Hi, how are you?"} valueLikes={20}/>
                <Post message={"It's my first post"} valueLikes={2}/>
        </div>
    );
};

export default MyPosts;