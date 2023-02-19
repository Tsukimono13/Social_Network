import React from 'react';
import {v1} from "uuid";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";


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
    messageForNewDialogs: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}
export type StoreType = {
    _state: StateType
    updateNewPostText: (messageForPost: string) => void
    addPost: (messageForPost: string) => void
    _renderTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: any) => void
    addMessage: (messageFrom: string)=> void
    updateNewMessageText: (newText: string)=> void
}
/*export type MainACTypes = addPostActionType | updateNewPostActionType | addMessageACType | updateNewMessageTextACType*/
/*
export const addPostAC = (messageForPost: string)=> {
    return {
        type: "ADD-POST",
        messageForPost: messageForPost
    } as const
}
type addPostActionType = ReturnType<typeof addPostAC>
type updateNewPostActionType = ReturnType<typeof updateNewPostAC>
export const updateNewPostAC = (newText:string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}
type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC=(messageForNewDialogs:string)=>{
    return {
        type: "ADD-MESSAGE",
        messageForNewDialogs: messageForNewDialogs
    }as const
}
type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>
export const updateNewMessageTextAC = (newText:string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: newText
    } as const
}*/
let store: StoreType = {
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
            messageForNewDialogs: "",
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
    _renderTree() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._renderTree = observer;
    },
    getState() {
        return this._state
    },
    addPost(messageForPost: string) {
        let newPost: PostType = {
            id: v1(),
            message: messageForPost,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.messageForNewPost = ""
        this._renderTree();
    },
        updateNewPostText(newText: string){
            this._state.profilePage.messageForNewPost = newText;
            this._renderTree();
    },
    addMessage() {
        let messageText = this._state.dialogsPage.messageForNewDialogs;
        this._state.dialogsPage.messageForNewDialogs = ""
        this._state.dialogsPage.messages.push({id: v1(), message: messageText});
        this._renderTree();
    },
    updateNewMessageText(newText: string){
        this._state.dialogsPage.messageForNewDialogs = newText;
        this._renderTree();
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._renderTree();


        /*if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: v1(),
                message: action.messageForPost,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.messageForNewPost = ""
            this._renderTree();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText;
            this._renderTree();
        } else if (action.type === "ADD-MESSAGE") {
            let message = this._state.dialogsPage.messageForNewDialogs;
            this._state.dialogsPage.messageForNewDialogs = ""
            this._state.dialogsPage.messages.push({id: v1(), message: message});
            this._renderTree();
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.dialogsPage.messageForNewDialogs = action.newText;
            this._renderTree();
        }*/

    }
}


export default store;
