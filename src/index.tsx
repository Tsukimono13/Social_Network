import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/State'

/*type AppState = {
    state: Array<StateType>
}*/
/*
export type MessageType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type PostsArType = {
    id: number
    message: string
    likesCount: number

}

let posts: Array<PostsArType> = [
    {id: 1, message: "Hi, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11},
    {id: 3, message: "Where are you?", likesCount: 11},
    {id: 4, message: "Fine, thanks", likesCount: 11}
]

let dialogs: Array<DialogsType> = [
    {id: 1, name: "Irina"},
    {id: 2, name: "Anton"},
    {id: 3, name: "Anastasia"},
    {id: 4, name: "Viki"},
    {id: 5, name: "Helen"},
    {id: 6, name: "Max"}
]


let messages: Array<MessageType> = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Fine"},
    {id: 3, message: "Why?"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Thank you"}
]
*/



ReactDOM.render(
    <App />,
    document.getElementById('root')
);

