import {v1} from "uuid";



export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}

export type InitialStateType = typeof initialState
let initialState = {
    messageForNewDialogs: "",
    dialogs: [
        {id: 5, name: "Irina"},
        {id: 6, name: "Anton"},
        {id: 7, name: "Anastasia"},
        {id: 47, name: "Viki"},
        {id: 474, name: "Helen"},
        {id: 45, name: "Max"}
    ] as Array<DialogsType>,
    messages: [
        {id: 43, message: "Hi"},
        {id: 23, message: "Fine"},
        {id: 8, message: "Why?"},
        {id: 63, message: "Yo"},
        {id: 366, message: "Thank you"}
    ] as Array<MessageType>
}
export const dialogsReducer = (state:InitialStateType = initialState, action: MainACTypes):InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let message = action.messageForNewDialogs;
            return {...state,
                messageForNewDialogs: '',
                messages: [...state.messages,{id: 5, message: message}]};
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {...state,messageForNewDialogs: action.newText};
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
