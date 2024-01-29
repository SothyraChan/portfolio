import React from 'react';
import './navbar.css';
// import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="logo.png" alt="logo" className='logo'/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Project</Link>
                <Link activeClass='active' to='services' spy={true} smooth={true} offset={-120} duration={500} className="desktopMenuListItem">Service</Link>
            </div>
            <buttom className="desktopMenubtn" onclick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }
        }>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</buttom>
        </nav>
    )
}

export default Navbar;