import React from "react";
import MessageStyles from "./Message.module.css"

type messageType = {
    avatar: string;
    name: string;
    message: string;
    time: string
}


function Message(props: messageType) {
    return (
        <div className={MessageStyles.message}>

            <div className={MessageStyles.ava}>
                <img src={props.avatar}/>
            </div>
            <div className={MessageStyles.block}>
                <div className={MessageStyles.name}>{props.name}</div>
                <div className={MessageStyles.message_text}>{props.message}</div>
                <div className={MessageStyles.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
