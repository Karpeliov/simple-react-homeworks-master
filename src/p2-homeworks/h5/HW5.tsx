import React, {useState} from "react";
import Header from "./Header";
import Routes from "./Routes";
import {HashRouter} from "react-router-dom";


function HW5() {

    const [showNB, setShowNB] = useState(false)
    const onBlur = (a: boolean) => {
        setShowNB(a)
        console.log("onBlur")
    }

    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header onBlur={onBlur} showNB={showNB}/>

                <Routes/>

            </HashRouter>
        </div>
    );
}

export default HW5;
