import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})
export let store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>