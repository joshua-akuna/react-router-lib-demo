import React from "react";
import { Outlet,Link } from "react-router-dom";

function Layout(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/blogs'>Blogs</Link>
                    </li>
                    <li to='/contact'>Contact</li>
                </ul>
            </nav>
        </>
    )
};

export default Layout;