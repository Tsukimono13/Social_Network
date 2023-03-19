import {Dispatch} from "redux";
import {authAPI, profileAPI} from "../api/Api";



export type InitialStateTypeForAuth = typeof initialState
let initialState = {
    userId: null as (number | null),
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}
export const authReducer = (state:InitialStateTypeForAuth = initialState, action: MainACTypes):InitialStateTypeForAuth => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload}
        default:
            return state;
    }
}
export type MainACTypes =  setUserDataType




export type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        payload: {userId, email, login, isAuth}

    } as const
}

export const authMeTC = () => {
    return (dispatch: Dispatch<MainACTypes>) => {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}