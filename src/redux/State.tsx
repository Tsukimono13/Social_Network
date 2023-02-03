import React from 'react';

export type MessageType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
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


 let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "Where are you?", likesCount: 11},
            {id: 4, message: "Fine, thanks", likesCount: 11}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Irina"},
            {id: 2, name: "Anton"},
            {id: 3, name: "Anastasia"},
            {id: 4, name: "Viki"},
            {id: 5, name: "Helen"},
            {id: 6, name: "Max"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Fine"},
            {id: 3, message: "Why?"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Thank you"}
        ]
    }
}

export default state