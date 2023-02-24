import {v1} from "uuid";

export type UsersType = {
    id: string
    isFollowed: boolean
    name: string
    status: string
    location: LocationType
    photos: any
}
export type LocationType = {
    country: string
    city: string
}

export type InitialStateType = typeof initialState
let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}
export const usersReducer = (state:InitialStateType = initialState, action: MainACTypes):InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state,
            users: state.users.map(u=>{
            if (u.id === action.userId) {
                return{...u, isFollowed: false}
            }
            return u;
        })}
        case 'UNFOLLOW': {
            return {...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId) {
                        return{...u, isFollowed: true}
                    }
                    return u;
                })}
        }
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_USERS_TOTAL_COUNT":
            return {...state, totalUsersCount: action.totalCount}
        default:
            return state;
    }
}
export type MainACTypes = followACType | unfollowACType | setUsersACType | setCurrentPageACType | setUsersTotalCountACType
export type followACType = ReturnType<typeof followAC>

export const followAC=(userId: string)=>{
    return {
        type: "FOLLOW",
        userId: userId,
    }as const
}

export type unfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: string) => {
    return {
        type: "UNFOLLOW",
        userId:userId
    } as const
}
export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage: currentPage
    } as const
}

export type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCountAC>
export const setUsersTotalCountAC = (totalCount: number) => {
    return {
        type: "SET_USERS_TOTAL_COUNT",
        totalCount: totalCount
    } as const
}