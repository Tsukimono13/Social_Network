import React from 'react';
import {v1} from "uuid";



export type MessageType = {
    id: string
    message: string
}

export type DialogsType = {
    id: string
    name: string
}

export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}
export type StoreType = {
    _state: StateType
    updateNewPostText:(messageForPost: string) => void
    addPost: (messageForPost: string) => void
    _renderTree:()=> void
    subscribe: (observer: ()=>void) => void
    getState: () => StateType
}
let store:StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "",
            posts: [
                {id: v1(), message: "Hi, how are you?", likesCount: 12},
                {id: v1(), message: "It's my first post", likesCount: 11},
                {id: v1(), message: "Where are you?", likesCount: 11},
                {id: v1(), message: "Fine, thanks", likesCount: 11}
            ]
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: "Irina"},
                {id: v1(), name: "Anton"},
                {id: v1(), name: "Anastasia"},
                {id: v1(), name: "Viki"},
                {id: v1(), name: "Helen"},
                {id: v1(), name: "Max"}
            ],
            messages: [
                {id: v1(), message: "Hi"},
                {id: v1(), message: "Fine"},
                {id: v1(), message: "Why?"},
                {id: v1(), message: "Yo"},
                {id: v1(), message: "Thank you"}
            ]
        }
    },
    _renderTree(){
        console.log('State changed')
    },
    addPost (messageForPost: string) {
        let newPost: PostType ={
            id: v1(),
            message: messageForPost,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.messageForNewPost= ""
        this._renderTree();
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.messageForNewPost = newText;
        this._renderTree();
},
    subscribe (observer) {
        this._renderTree = observer;
    },
    getState(){
        return this._state
    }
}


export default store;
