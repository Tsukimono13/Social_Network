import {userAPI} from "../api/Api";
import {Dispatch} from "redux";

type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string
    photos: any
}


export type InitialStateType = typeof initialState
let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 9,
    totalUsersCount: 0,
    currentPage: 1,
    followingInProgress: [] as Array<number>,
    isFetching: true
}

export const usersReducer = (state: InitialStateType = initialState, action: MainACTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET_USERS_TOTAL_COUNT":
            return {...state, totalUsersCount: action.totalCount}
        case "TOGGLE_IS_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
            return {
                ...state,
                followingInProgress: action.followingInProgress ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}
export type MainACTypes = followACType | unfollowACType | setUsersACType
    | setCurrentPageACType | setUsersTotalCountACType | setIsFetchingACType
    | setIsFollowingACType

export type followACType = ReturnType<typeof follow>

export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId,
    } as const
}

export type unfollowACType = ReturnType<typeof unfollow>
export const unfollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UsersType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage: currentPage
    } as const
}

export type setUsersTotalCountACType = ReturnType<typeof setUsersTotalCount>
export const setUsersTotalCount = (totalCount: number) => {
    return {
        type: "SET_USERS_TOTAL_COUNT",
        totalCount: totalCount
    } as const
}

export type setIsFetchingACType = ReturnType<typeof setIsFetching>
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching: isFetching
    } as const
}

export type setIsFollowingACType = ReturnType<typeof setIsFollowing>
export const setIsFollowing = (followingInProgress: boolean, userId: number) => {
    return {
        type: "TOGGLE_IS_FOLLOWING_PROGRESS",
        followingInProgress: followingInProgress,
        userId: userId
    } as const
}


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<MainACTypes>) => {
        dispatch(setIsFetching(true))

        userAPI.getUsers(currentPage,pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        })
    }
}