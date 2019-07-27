import React from 'react';
import { Link } from 'react-router-dom';
import TemporaryDrawer from "Components/Drawer/Drawers"


 const Navbar = ()=>{
    return(
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" id="brand-logo"></Link>
                
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/packages">Packages</Link></li>
                    {/* <li><Link to="/cart">My cart</Link></li> */}
                    <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    <li><TemporaryDrawer>Login</TemporaryDrawer></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
