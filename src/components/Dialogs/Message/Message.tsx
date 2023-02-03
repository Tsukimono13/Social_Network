import React from 'react';
import s from './../Dialogs.module.css'
import {MessageType} from "antd/es/message";


type messegeType = {
    message: string
}

const Messege = (props: messegeType) => {
    return <div className={s.dialog}>{props.message}</div>
}


export default Messege;