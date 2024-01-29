// File: NavBar.js, Student's name: Sothyra Chan, ID: 301289779, Date: 28 01 2024

import React, { useState } from 'react';
import './navbar.css';
// import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menuIcon from '../../assets/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src="logo.png" alt="logo" className='logo'/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-120} duration={500} className="desktopMenuListItem">Project</Link>
                <Link activeClass='active' to='services' spy={true} smooth={true} offset={-120} duration={500} className="desktopMenuListItem">Service</Link>
            </div>
            <buttom className="desktopMenuBtn" onclick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }
        }>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</buttom>

            <img src={menuIcon} alt="Menu" className='mobileMenu' style={{width: '60px', height: 'auto'}} onClick={() =>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem"   onClick={() =>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem"  onClick={() =>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="listItem"onClick={() =>setShowMenu(false)}>Project</Link>
                <Link activeClass='active' to='services' spy={true} smooth={true} offset={-120} duration={500} className="listItem"onClick={() =>setShowMenu(false)}>Service</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() =>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;