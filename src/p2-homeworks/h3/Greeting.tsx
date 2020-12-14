import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string, // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void, // need to fix any
    addUser: () => void,
    error: string, // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = !(error === "") ? s.error : s.someClass
    const buttonClass = !(error === "") ? s.buttError : s.buttClass// не уверен, что (error === "") красиво

    return (
        <div className={s.main}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span>{error}</span>
            <button className={buttonClass} onClick={addUser}>add</button>

            <span className={s.users}> Total Users -{totalUsers}-</span>
        </div>
    );
}

export default Greeting;
