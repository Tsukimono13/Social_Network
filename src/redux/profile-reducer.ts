import {v1} from "uuid";
import {PostType, ProfilePageType, StateType} from "./Store";


let initialState:ProfilePageType = {
        messageForNewPost: "",
        posts: [
            {id: v1(), message: "Hi, how are you?", likesCount: 12},
            {id: v1(), message: "It's my first post", likesCount: 11},
            {id: v1(), message: "Where are you?", likesCount: 11},
            {id: v1(), message: "Fine, thanks", likesCount: 11}
        ]
    }
export const profileReducer = (state = initialState, action: MainACTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostType = {
                id: v1(),
                message: action.messageForPost,
                likesCount: 0
            }

        state.posts.push(newPost);
        state.messageForNewPost = "";
            return state;
        case 'UPDATE-NEW-POST-TEXT': {
            state.messageForNewPost = action.newText;
            return state;
        }
        default:
            return state;
    }
}

export type MainACTypes = addPostActionType | updateNewPostActionType

export const addPostAC = (messageForPost: string) => {
    return {
        type: "ADD-POST",
        messageForPost: messageForPost
    } as const
}
type addPostActionType = ReturnType<typeof addPostAC>
type updateNewPostActionType = ReturnType<typeof updateNewPostAC>
export const updateNewPostAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}