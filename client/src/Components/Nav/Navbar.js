import React from 'react';
import { Link } from 'react-router-dom';
import TemporaryDrawer from "components/Drawer/Drawers"


 const Navbar = ()=>{

    const [user, setUser] = React.useState(JSON.parse(sessionStorage.getItem('user')));

    return(
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" id="brand-logo">Go Wash KC</Link>
                
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/packages">Packages</Link></li>
                    {/* <li><Link to="/cart">My cart</Link></li> */}
                    <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    <li><TemporaryDrawer>Login</TemporaryDrawer></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/users">{user.firstName}</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
