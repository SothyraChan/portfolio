import React from 'react';
import './skills.css';
import GUIDesign from '../../assets/gui.png';
import WebDesign from '../../assets/webdesign.png';
import AppDesign from '../../assets/DesktopIcon.png';
import Resume from '../../assets/Resume.pdf';
// import { defaults } from 'lite-server';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">My Skillsets</span>   
            <span className="skillDesc">I am passionate in learning and exposing my creativity thought creating interactive GUI and web designs. I am proficient in HTML, CSS, and Javascript.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={GUIDesign} alt="GUI" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>GUI Design</h2>
                        <p>I am able create graphic user interface - GUI using advanced C# language.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"  />
                    <div className="skillBarText">
                        <h2>Wesite Design</h2>
                        <p>I can use: HTML, CSS, Javascript, and other frameworks to build websites.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Desktop App Design</h2>
                        <p>I am skilled in formuted a desktop web form with the use of advanced C#, intermidiate level of mySQL, and LINQ Query. </p>
                    </div>
                </div>
            </div>
            <div className="resume">
                <a href={Resume} target="_blank" rel="Resume.pdf" className="btnResume">My Resume</a>
            </div>
         </section>
    );
}

export default Skills;

// <img src={AppDesign} alt="AppDesign" className="skillBarImg" style:{{width: '100px', hieght: 'auto'}} />