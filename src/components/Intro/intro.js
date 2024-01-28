import React from 'react';
import './intro.css';
import background from '../../assets/bgImg.png'


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Sothyra</span> <br/>Software Developer</span>

            </div>
            <img src={background} alt="Profile-Logo" className="background"/>
        </section>
    )
}

export default Intro;