import React from "react";
import { NavLink } from "react-router-dom";
import PreJunior from "./pages/PreJunior";

function Header() {
    return (
        <div>
            // add NavLinks
            <NavLink to="Junior" >Junior</NavLink>
            {/*<NavLink to="/Junior+" >Junior+</NavLink>*/}

        </div>
    );
}

export default Header;
