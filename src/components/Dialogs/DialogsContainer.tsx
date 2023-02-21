import React, {ChangeEvent} from 'react';
import {addMessageAC, InitialStateType, MainACTypes, updateNewMessageTextAC,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect, useDispatch} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {CombinedState, combineReducers, Dispatch} from "redux";

/*type DialogsType = {
    store: AppRootStateType
}*/

//const DialogsContainer = (props: DialogsType) => {

//const dispatch = useDispatch()
/* let addMessageHandler = () => {
     dispatch(addMessageAC(props.store.dialogsPage.messageForNewDialogs))
 }

 let updateNewPostCallback = (newText: string) => {
     dispatch(updateNewMessageTextAC(newText))
 }
 return (
     <div>
         <Dialogs dialogsPage={props.store.dialogsPage} addMessageHandler={addMessageHandler} updateNewPostCallback={updateNewPostCallback}/>
     </div>

 )
};*/

type MapStateToPropsType = {
    dialogsPage: InitialStateType
}
type MapDispatchToPropsType={
    addMessage: (messageForNewDialogs: string) => void
    updateNewPost: (newText: string) => void
}


let mapStateToProps = (state: AppRootStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        addMessage: (messageForNewDialogs: string) => {
            dispatch(addMessageAC(messageForNewDialogs))
        },
        updateNewPost: (newText: string) => {
            dispatch(updateNewMessageTextAC(newText))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;

