import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

    return (
        <div className="navigation">
            <ul>
                <NavLink to="/">
                    <li>home</li>
                </NavLink>
                <NavLink to="/bio">
                    <li>bio</li>
                </NavLink>
                <NavLink to="/listen">
                    <li>listen</li>
                </NavLink>
                <NavLink to="/gigs">
                    <li>gigs</li>
                </NavLink>
            </ul>
        </div>
    )

}

export default Nav ; 