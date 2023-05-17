import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

    return (
        <div className="navigation">
            <div className='absolute top-40 left-10 z-20'>
            <ul>
                <NavLink to="/">
                    <li className="py-4">home</li>
                </NavLink>
                <NavLink to="/bio">
                    <li className="py-4">bio</li>
                </NavLink>
                <NavLink to="/listen">
                    <li className="py-4">listen</li>
                </NavLink>
                <NavLink to="/gigs">
                    <li className="py-4">gigs</li>
                </NavLink>
            </ul>
            </div>
        </div>
    )

}

export default Nav ; 