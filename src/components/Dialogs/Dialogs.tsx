import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItems/DialogItem";
import Messege from "./Message/Message";
import {MessagePropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";



const Dialogs = (props: MessagePropsType) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Messege message={m.message} key={m.id}/>)

    let addMessageCallback = () => {
        props.addMessage(props.dialogsPage.messageForNewDialogs)
    }

    let updateNewPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPost(e.currentTarget.value)
    }

   /* if (!props.auth.isAuth) return <Redirect to={"/login"}/>*/
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div><textarea onChange={updateNewPostHandler} value={props.dialogsPage.messageForNewDialogs}
                                   placeholder={'Enter your message'}/></div>
                    <div>
                        <button onClick={addMessageCallback}>Add Message</button>
                    </div>
                </div>
            </div>

        </div>

    )
};

export default Dialogs;