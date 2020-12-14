import React from "react";
import {NavLink} from "react-router-dom";
import HeaderStyles from './Header.module.css';

export type HeaderPropsType = {
    onBlur: (a: boolean) => void
    showNB: boolean
}

function Header(props: HeaderPropsType) {
    return (
        <div className={HeaderStyles.header} onMouseLeave={() => props.onBlur(false)}
             onMouseMove={() => props.onBlur(true)}>M E N U
            {props.showNB &&
            <div className={HeaderStyles.navbar}>
            <span className={HeaderStyles.item}>
                <NavLink to="/PRE_JUNIOR" activeClassName={HeaderStyles.activeLink}>PreJunior</NavLink>
            </span>
                <span className={HeaderStyles.item}>
                <NavLink to="/JUNIOR" activeClassName={HeaderStyles.activeLink}>Junior</NavLink>
            </span>
                <span className={HeaderStyles.item}>
                <NavLink to="/JUNIORPLUS" activeClassName={HeaderStyles.activeLink}>Junior+ </NavLink>
            </span>
            </div>}
        </div>
    );
}

// function Header(props: HeaderPropsType) {
//     return (
//
//              <div className={HeaderStyles.navbar} onMouseLeave={() => props.onBlur(false)} onMouseMove={() => props.onBlur(true)}>
//                  { props.showNB && <span className={HeaderStyles.item}>
//                 <NavLink to="/PRE_JUNIOR" activeClassName={HeaderStyles.activeLink}>PreJunior</NavLink>
//             </span>}
//                  { props.showNB && <span className={HeaderStyles.item}>
//                 <NavLink to="/JUNIOR" activeClassName={HeaderStyles.activeLink}>Junior</NavLink>
//             </span>}
//                 <span className={HeaderStyles.item}>
//                 <NavLink to="/JUNIORPLUS" activeClassName={HeaderStyles.activeLink}>Junior+ </NavLink>
//             </span>
//             </div>
//
//     );
// }

export default Header;
