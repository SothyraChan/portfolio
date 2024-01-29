// File: intro.js, Student's name: Sothyra Chan, ID: 301289779, Date: 28 01 2024
import React from 'react';
import './intro.css';
import bg from '../../assets/bgImg.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Welcome,</span>
                <span className="introText">I'm <span className="introName">Sothyra Chan,</span> <br/>Software Developer</span>
                <p className='introPara'>I am an enthusiatic web developer with the desire to showcase my creativity <br/>  by making appealing websites.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg" />Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}

export default Intro;