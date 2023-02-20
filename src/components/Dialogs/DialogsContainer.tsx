import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItems/DialogItem";
import Messege from "./Message/Message";
import {MessageType} from "antd/es/message";
import {addMessageAC, MainACTypes, updateNewMessageTextAC,} from "../../redux/dialogs-reducer";
import {DialogPageType, StateType} from "../../redux/Store";
import Dialogs from "./Dialogs";
import {connect, useDispatch} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {CombinedState, combineReducers} from "redux";

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

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessageHandler: (messageForNewDialogs: string) => {
            dispatch(addMessageAC(messageForNewDialogs))
        },
        updateNewPostCallback: (newText: string) => {
            dispatch(updateNewMessageTextAC(newText))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;

