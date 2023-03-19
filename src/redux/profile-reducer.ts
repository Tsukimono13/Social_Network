import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/Api";
import {setIsFollowing, unfollow} from "./users-reducer";

export type ProfileType = {
    photos: PhotosType
    userId: number
}

export type PhotosType = {
    small: string
    large: string
}
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostType>
    profile: ProfileType
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type InitialStateType = typeof initialState
let initialState = {
        messageForNewPost: "",
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
            {id: 3, message: "Where are you?", likesCount: 11},
            {id: 4, message: "Fine, thanks", likesCount: 11}
        ] as Array<PostType>,
    profile: null as ProfileType | null
    }
export const profileReducer = (state:InitialStateType = initialState, action: MainACTypes):InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            let message = action.messageForPost;
            let newPost = {
                id: 5,
                message: message,
                likesCount: 0
            }
            return {...state,
                messageForNewPost: '',
            posts: [...state.posts, newPost]};
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, messageForNewPost: action.newText};
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile};
        }
        default:
            return state;
    }
}

export type MainACTypes = addPostActionType | updateNewPostActionType | setUserProfileActionType
export type addPostActionType = ReturnType<typeof addPostAC>
export const addPostAC = (messageForPost: string) => {
    return {
        type: "ADD-POST",
        messageForPost: messageForPost
    } as const
}

export type updateNewPostActionType = ReturnType<typeof updateNewPostAC>
export const updateNewPostAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

export type setUserProfileActionType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: ProfileType | null) => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const
}


export const getUserProfileTC = (userId: number) => {
    return (dispatch: Dispatch<MainACTypes>, getState: any) => {
        const userId = getState().auth.userId
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}
