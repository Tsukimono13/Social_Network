import React from 'react';
import './Post.css';

type MessageType = {
    message: string
    valueLikes: number
}


const Post = (props:MessageType) => {
    return (
        <div className={"post"}>
            <img alt={"#"} className={"avatar-img"} src={"https://www.clipartmax.com/png/middle/72-722180_these-are-some-cats-avatar-i-drew-during-my-free-time-black.png"}/>
            {props.message}
            <div>
            <span>{props.valueLikes} likes</span>
            </div>
        </div>


    );
};

export default Post;