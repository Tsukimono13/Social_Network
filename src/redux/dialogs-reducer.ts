import {v1} from "uuid";



export type MessageType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
}

export type InitialStateType = typeof initialState
let initialState = {
    messageForNewDialogs: "",
    dialogs: [
        {id: v1(), name: "Irina"},
        {id: v1(), name: "Anton"},
        {id: v1(), name: "Anastasia"},
        {id: v1(), name: "Viki"},
        {id: v1(), name: "Helen"},
        {id: v1(), name: "Max"}
    ] as Array<DialogsType>,
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "Fine"},
        {id: v1(), message: "Why?"},
        {id: v1(), message: "Yo"},
        {id: v1(), message: "Thank you"}
    ] as Array<MessageType>
}
export const dialogsReducer = (state:InitialStateType = initialState, action: MainACTypes):InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let message = action.messageForNewDialogs;
            return {...state,
                messageForNewDialogs: '',
                messages: [...state.messages,{id: v1(), message: message}]};
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
