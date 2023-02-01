import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link data-testid={'home-link'} to={'/'}>Home </Link>
            <Link data-testid={'about-link'} to={'/about'}>About</Link>
            <Link data-testid={'users-link'} to={'/users'}>Users</Link>
        </div>
    );
};

export default Navbar;