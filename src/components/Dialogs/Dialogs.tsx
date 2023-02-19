import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItems/DialogItem";
import Messege from "./Message/Message";
import {MessageType} from "antd/es/message";
import {addMessageAC, MainACTypes, updateNewMessageTextAC,} from "../../redux/dialogs-reducer";
import {DialogPageType} from "../../redux/Store";

type DialogsType = {
    dialogsPage: DialogPageType
    dispatch: (action: MainACTypes) => void


}

const Dialogs = (props: DialogsType) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Messege message={m.message} key={m.id}/>)

    let addMessageHandler = () => {
        props.dispatch(addMessageAC(props.dialogsPage.messageForNewDialogs))
    }

    let updateNewPostCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div><textarea onChange={updateNewPostCallback} value={props.dialogsPage.messageForNewDialogs}
                                   placeholder={'Enter your message'}/></div>
                    <div>
                        <button onClick={addMessageHandler}>Add Message</button>
                    </div>
                </div>
            </div>

        </div>

    )
};

export default Dialogs;