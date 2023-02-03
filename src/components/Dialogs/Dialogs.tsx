import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItems/DialogItem";
import Messege from "./Message/Message";
import {MessageType} from "antd/es/message";
import {DialogPageType, ProfilePageType, StateType} from "../../redux/State";

type DialogsType = {
    dialogsPage: DialogPageType

}

const Dialogs = (props: DialogsType) => {
    let state = props.dialogsPage;

    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Messege message={m.message} key={m.id}/>)

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