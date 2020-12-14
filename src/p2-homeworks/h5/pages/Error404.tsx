import React from "react";
import Styles from './Error404.module.css'

function Error404() {
    return (
        <div className={Styles.main}>
            <div className={Styles.error_message}>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <h1 >OOPS!</h1>
            <h2 className={Styles.error_message}>Error 404</h2>
            <div className={Styles.error_message}>OOPS! Something went wrong! Page not found!</div>

        </div>
    );
}

export default Error404;
