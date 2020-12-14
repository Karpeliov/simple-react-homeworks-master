import React from "react";
import Message from "./Message";


const messageData = {
    avatar: "https://styles.redditmedia.com/t5_l676j/styles/profileIcon_snood67ea9d2-25c4-40cf-a521-ee38d4552a54-headshot.png?width=256&height=256&crop=256:256,smart&s=df3c7f9039fcfb795aa90d2ebd85dee338f15850",
    name: "Some Name",
    message: "some text",
    time: "22:00",
};

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
