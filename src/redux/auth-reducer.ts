

export type InitialStateType = typeof initialState
let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducer = (state:InitialStateType = initialState, action: MainACTypes):InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}
export type MainACTypes =  setUserDataType




export type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id:any, email:any, login:any) => {
    return {
        type: "SET-USER-DATA",
        data: {id, email, login}
    } as const
}