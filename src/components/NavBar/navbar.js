import React from 'react';
import './navbar.css';
// import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="logo.png" alt="logo" className='logo'/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Project</Link>
                <Link className="desktopMenuListItem">Service</Link>
            </div>
            <buttom className="desktopMenubtn">
                <img src="" alt="" className="desktopMenuImg" />Contact Me</buttom>
        </nav>
    )
}

export default Navbar;