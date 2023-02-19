import {v1} from "uuid";
import {DialogPageType, PostType, StateType} from "./Store";

let initialState: DialogPageType = {
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
export const dialogsReducer = (state = initialState, action: MainACTypes) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let message = state.messageForNewDialogs;
        state.messageForNewDialogs = ""
        state.messages.push({id: v1(), message: message});
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            state.messageForNewDialogs = action.newText;
            return state;
        }
        default:
            return state;
    }
}
export type MainACTypes = addMessageACType | updateNewMessageTextACType
export type addMessageACType = ReturnType<typeof addMessageAC>
export const addMessageAC=(messageForNewDialogs:string)=>{
    return {
        type: "ADD-MESSAGE",
        messageForNewDialogs: messageForNewDialogs
    }as const
}
export type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>
export const updateNewMessageTextAC = (newText:string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: newText
    } as const
}
