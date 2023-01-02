import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItems/DialogItem";
import Messege from "./Message/Message";
import {DialogsType, MessageType} from "../../index";

type DialogsTypeFromIndex = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

const Dialogs = (props: DialogsTypeFromIndex) => {

    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Messege message={m.message}/>)

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>


    )
};

export default Dialogs;